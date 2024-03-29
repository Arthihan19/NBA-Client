import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from '../../../styles/StyleConstants';

interface Props {
  onBeforeChange?: (value: string) => void;
  onAfterChange?: (value: string) => void;
  daysAgo?: Date;
}

export function DateRangeFilter(props: Props) {
  const today = new Date();
  const oneDayAgo = new Date(today);
  oneDayAgo.setDate(oneDayAgo.getDate() - 1);
  const oneMonthLater = new Date(today);
  oneMonthLater.setDate(oneMonthLater.getDate() + 30);

  React.useEffect(() => {
    props.onAfterChange &&
      props.onAfterChange(
        props.daysAgo ? props.daysAgo.toISOString() : oneDayAgo.toISOString(),
      );
    props.onBeforeChange && props.onBeforeChange(oneMonthLater.toISOString());
  }, []);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  return (
    <Wrapper>
      <Heading>Date Range Filter</Heading>
      <DateRangeWrapper>
        <DateInput
          onChange={e =>
            props.onAfterChange && props.onAfterChange(e.target.value)
          }
          type="date"
          defaultValue={formatDate(oneDayAgo)}
          min={formatDate(props.daysAgo ? props.daysAgo : oneDayAgo)}
          max={formatDate(oneMonthLater)}
          placeholder="Start Date"
        />
        <Span>to</Span>
        <DateInput
          onChange={e =>
            props.onBeforeChange && props.onBeforeChange(e.target.value)
          }
          type="date"
          min={formatDate(props.daysAgo ? props.daysAgo : oneDayAgo)}
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
