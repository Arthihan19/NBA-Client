import * as React from 'react';
import styled from 'styled-components/macro';
import { DropDownFilter } from './DropDownFilter';
import { DateRangeFilter } from './DateRangeFilter';

export function Schedule() {
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
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
  width: 100%;
  border: none;
  border-top: 0.2em solid ${p => p.theme.border};
  opacity: 0.1;
  margin: 2em 0;
`;
