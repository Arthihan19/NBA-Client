import * as React from 'react';
import styled from 'styled-components/macro';
import { DateRangeFilter } from '../../../components/DateRangeFilter';
import { ScheduleGroup } from './ScheduleGroup';
import { SingleButton } from '../../../components/SingleButton';
import { DropDownFilter } from '../../../components/DropDownFilter';

export function Schedule() {
  const testItems: ScheduleItem[] = [
    {
      id: '1',
      dateTimeOfMatch: '2024-05-01T10:00:00',
      teamOneName: 'Team 1',
      teamTwoName: 'Team 2',
      teamOneImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
      teamTwoImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
      teamOneOdds: '1.5',
      teamTwoOdds: '2.5',
    },
    {
      id: '2',
      dateTimeOfMatch: '2024-05-01T10:00:00',
      teamOneName: 'Team 1',
      teamTwoName: 'Team 2',
      teamOneImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
      teamTwoImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
      teamOneOdds: '1.5',
      teamTwoOdds: '2.5',
    },
    {
      id: '3',
      dateTimeOfMatch: '2024-05-01T10:00:00',
      teamOneName: 'Team 1',
      teamTwoName: 'Team 2',
      teamOneImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
      teamTwoImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
      teamOneOdds: '1.5',
      teamTwoOdds: '2.5',
    },
    {
      id: '4',
      dateTimeOfMatch: '2024-05-01T10:00:00',
      teamOneName: 'Team 1',
      teamTwoName: 'Team 2',
      teamOneImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
      teamTwoImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
      teamOneOdds: '1.5',
      teamTwoOdds: '2.5',
    },
  ];

  return (
    <Wrapper>
      <ScheduleTitle>NBA Games Schedule</ScheduleTitle>
      <FilterWrapper>
        <FilterItemWrapper>
          <DropDownFilter
            heading={'Team filter'}
            values={[
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
          />
        </FilterItemWrapper>
        <FilterItemWrapper>
          <DateRangeFilter />
        </FilterItemWrapper>
        <FilterItemWrapper>
          <SingleButton title={'Search'} filled={true} />
        </FilterItemWrapper>
      </FilterWrapper>
      <Separator />
      <ScheduleGroup items={testItems} />
      <SingleButton title={'Load more'} filled={false} />
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
