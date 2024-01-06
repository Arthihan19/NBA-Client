import * as React from 'react';
import styled from 'styled-components/macro';
import { DropDownFilter } from './DropDownFilter';
import { DateRangeFilter } from './DateRangeFilter';
import { ScheduleGroup } from './ScheduleGroup';
import { SingleButton } from '../../../components/SingleButton';

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
        <DropDownFilter
          heading={'Team filter'}
          values={['Team 1', 'Team 2', 'Team 3']}
        />
        <DateRangeFilter />
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
  justify-content: space-between;
  width: 60%;
`;

const Separator = styled.hr`
  width: 95%;
  border: none;
  border-top: 0.2em solid ${p => p.theme.border};
  opacity: 0.1;
  margin: 2em 0;
`;
