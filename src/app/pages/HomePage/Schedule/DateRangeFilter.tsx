import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from '../../../../styles/StyleConstants';

interface Props {}

export function DateRangeFilter(props: Props) {
  const today = new Date();
  const oneDayAgo = new Date(today);
  oneDayAgo.setDate(oneDayAgo.getDate() - 1);
  const oneMonthLater = new Date(today);
  oneMonthLater.setDate(oneMonthLater.getDate() + 30);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  return (
    <Wrapper>
      <Heading>Date Range Filter</Heading>
      <DateRangeWrapper>
        <DateInput
          type="date"
          defaultValue={formatDate(oneDayAgo)}
          min={formatDate(oneDayAgo)}
          max={formatDate(oneMonthLater)}
          placeholder="Start Date"
        />
        <Span>to</Span>
        <DateInput
          type="date"
          min={formatDate(oneDayAgo)}
          max={formatDate(oneMonthLater)}
          defaultValue={formatDate(oneMonthLater)}
          placeholder="End Date"
        />
      </DateRangeWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.span`
  color: ${p => p.theme.primary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  margin-right: 1em;
`;

const DateRangeWrapper = styled.div`
  display: flex;
  gap: 0.5em;
`;

const DateInput = styled.input`
  padding: 0.4em;
  border-radius: ${StyleConstants.BORDER_RADIUS_SMALL};
  color: ${p => p.theme.primary};
  border: 0.15em solid ${p => p.theme.primary};
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    border-color: ${p => p.theme.secondary};
  }

  &:focus {
    border-color: ${p => p.theme.secondary};
    outline: none;
  }
`;

const Span = styled.span`
  color: ${p => p.theme.primary};
  text-decoration: underline;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;
