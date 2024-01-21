import * as React from 'react';
import styled from 'styled-components/macro';
import { DateRangeFilter } from '../../../components/DateRangeFilter';
import { ScheduleGroup } from './ScheduleGroup';
import { SingleButton } from '../../../components/SingleButton';
import { DropDownFilter } from '../../../components/DropDownFilter';
import { useDispatch, useSelector } from 'react-redux';
import { useBetSlice } from '../slice';
import { selectBet } from '../slice/selectors';
import { BetSlipItem, BetStateScheduleItem } from '../slice/types';
import { Sidebar } from '../../../components/Sidebar';
import { media, sizes } from '../../../../styles/media';
import { useState } from 'react';
import { Spinner } from '../../../components/Spinner';

export function Schedule() {
  const { loading, schedule } = useSelector(selectBet);
  const { actions } = useBetSlice();
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = React.useState<number>(0);

  const [loadedSchedule, setLoadedSchedule] = React.useState<ScheduleItem[]>(
    [],
  );
  const [beforeDate, setBeforeDate] = React.useState<Date>();
  const [afterDate, setAfterDate] = React.useState<Date>();

  const [teamName, setTeamName] = React.useState<string>('');

  React.useEffect(() => {
    if (
      loadedSchedule.length > 0 &&
      loadedSchedule.every(item => schedule.includes(item))
    ) {
      return;
    }

    setPageNumber(pageNumber + 1);
    setLoadedSchedule([...loadedSchedule, ...mapItems(schedule)]);
  }, [schedule]);

  React.useEffect(() => {
    if (teamName === 'All teams') {
      setTeamName('');
    }

    setPageNumber(0);
    setLoadedSchedule([]);

    dispatch(
      actions.fetchSchedule({
        currentPage: 0,
        pageSize: 20,
        beforeDate: beforeDate ? beforeDate.toISOString() : undefined,
        afterDate: afterDate ? afterDate.toISOString() : undefined,
        teamName: teamName,
      }),
    );
  }, [beforeDate, afterDate, teamName]);

  const fetchResults = () => {
    dispatch(
      actions.fetchSchedule({
        currentPage: pageNumber,
        pageSize: 20,
        beforeDate: beforeDate ? beforeDate.toISOString() : undefined,
        afterDate: afterDate ? afterDate.toISOString() : undefined,
        teamName: teamName,
      }),
    );
  };

  const mapItems = (betSchedule: BetStateScheduleItem[]) => {
    const newItems = [...betSchedule];

    return newItems.map(item => {
      const scheduleItem: ScheduleItem = {
        id: item.id,
        teamOne: item.teamOne,
        teamOneId: item.teamOneId,
        teamOneOdds: item.teamOneOdds,
        teamOneImage: determineImage(item.teamOne),
        teamTwo: item.teamTwo,
        teamTwoId: item.teamTwoId,
        teamTwoOdds: item.teamTwoOdds,
        teamTwoImage: determineImage(item.teamTwo),
        matchDate: item.matchDate,
      };

      return scheduleItem;
    });
  };

  const determineImage = (teamName: string) => {
    return require(`../../../teamImages/${teamName}.png`);
  };

  const onAddBetClick = (item: ScheduleItem, betTeamId: string) => {
    const betItem: BetSlipItem = {
      ...item,
      betTeamId: betTeamId,
      betAmount: 0,
    };

    dispatch(actions.addToBetSlip(betItem));
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <ScheduleTitle>NBA Games Schedule</ScheduleTitle>
      <FilterWrapper>
        <FilterItemWrapper>
          <DropDownFilter
            heading={'Team filter'}
            values={[
              'All teams',
              'Boston Celtics',
              'Brooklyn Nets',
              'New York Knicks',
              'Philadelphia 76ers',
              'Toronto Raptors',
              'Chicago Bulls',
              'Cleveland Cavaliers',
              'Detroit Pistons',
              'Indiana Pacers',
              'Milwaukee Bucks',
              'Atlanta Hawks',
              'Charlotte Hornets',
              'Miami Heat',
              'Orlando Magic',
              'Washington Wizards',
              'Denver Nuggets',
              'Minnesota Timberwolves',
              'Oklahoma City Thunder',
              'Portland Trail Blazers',
              'Utah Jazz',
              'Golden State Warriors',
              'LA Clippers',
              'Los Angeles Lakers',
              'Phoenix Suns',
              'Sacramento Kings',
              'Dallas Mavericks',
              'Houston Rockets',
              'Memphis Grizzlies',
              'New Orleans Pelicans',
              'San Antonio Spurs',
            ]}
            onChange={value => setTeamName(value)}
          />
        </FilterItemWrapper>
        <FilterItemWrapper>
          <DateRangeFilter
            onBeforeChange={value => setBeforeDate(new Date(value))}
            onAfterChange={value => setAfterDate(new Date(value))}
          />
        </FilterItemWrapper>
      </FilterWrapper>
      <Separator />
      {loading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <>
          <ContentWrapper>
            {windowWidth >= sizes.large ? (
              <>
                <ScheduleGroup items={loadedSchedule} onClick={onAddBetClick} />
                <Sidebar />
              </>
            ) : (
              <>
                <Sidebar />
                <ScheduleGroup items={loadedSchedule} onClick={onAddBetClick} />
              </>
            )}
          </ContentWrapper>
          <SingleButton
            title={'Load more'}
            filled={false}
            onClick={() => {
              setPageNumber(pageNumber + 1);
              fetchResults();
            }}
          />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 2em;

  ${media.large()} {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
  }

  ${media.xlarge()} {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
  }
`;

const FilterItemWrapper = styled.div`
  margin-left: 2em;
  margin-right: 2em;
`;

const ScheduleTitle = styled.a`
  color: ${p => p.theme.secondary};
  text-decoration: none;
  font-size: 2.3rem;
  font-weight: 600;
  padding-top: 3%;
  padding-bottom: 3%;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Separator = styled.hr`
  width: 95%;
  border: none;
  border-top: 0.2em solid ${p => p.theme.border};
  opacity: 0.1;
  margin: 2em 0;
`;
