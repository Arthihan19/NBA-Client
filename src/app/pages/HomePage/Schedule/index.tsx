import * as React from 'react';
import styled from 'styled-components/macro';
import { DateRangeFilter } from '../../../components/DateRangeFilter';
import { ScheduleGroup } from './ScheduleGroup';
import { SingleButton } from '../../../components/SingleButton';
import { DropDownFilter } from '../../../components/DropDownFilter';
import { useDispatch, useSelector } from 'react-redux';
import { useBetSlice } from '../../BetsPage/slice';
import { selectBet } from '../../BetsPage/slice/selectors';
import { BetState, BetStateScheduleItem } from '../../BetsPage/slice/types';

export function Schedule() {
  const { schedule } = useSelector(selectBet);
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
        beforeDate: beforeDate,
        afterDate: afterDate,
        teamName: teamName,
      }),
    );
  }, [beforeDate, afterDate, teamName]);

  const fetchResults = () => {
    dispatch(
      actions.fetchSchedule({
        currentPage: pageNumber,
        pageSize: 20,
        beforeDate: beforeDate,
        afterDate: afterDate,
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
        <FilterItemWrapper>
          <SingleButton title={'Search'} filled={true} />
        </FilterItemWrapper>
      </FilterWrapper>
      <Separator />
      <ScheduleGroup items={loadedSchedule} />
      <SingleButton
        title={'Load more'}
        filled={false}
        onClick={() => {
          setPageNumber(pageNumber + 1);
          fetchResults();
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 4;
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
