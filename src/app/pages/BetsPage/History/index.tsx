import * as React from 'react';
import styled from 'styled-components/macro';
import { DropDownFilter } from '../../../components/DropDownFilter';
import { DateRangeFilter } from '../../../components/DateRangeFilter';
import { SingleButton } from '../../../components/SingleButton';
import { HistoryGroup } from './HistoryGroup';
import { useDispatch, useSelector } from 'react-redux';
import { selectBetHistory } from '../slice/selectors';
import { BetHistoryItem } from '../slice/types';
import { useBetHistorySlice } from '../slice';

export function History() {
  const { betHistory } = useSelector(selectBetHistory);
  const { actions } = useBetHistorySlice();
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = React.useState<number>(0);

  const [loadedHistory, setLoadedHistory] = React.useState<BetHistoryItem[]>(
    [],
  );
  const [beforeDate, setBeforeDate] = React.useState<Date>();
  const [afterDate, setAfterDate] = React.useState<Date>();

  const [state, setState] = React.useState<string>('');

  React.useEffect(() => {
    if (
      loadedHistory.length > 0 &&
      loadedHistory.every(item => betHistory.includes(item))
    ) {
      return;
    }

    setPageNumber(pageNumber + 1);
    setLoadedHistory([...betHistory, ...loadedHistory]);
  }, [betHistory]);

  React.useEffect(() => {
    if (state === 'All') {
      setState('');
    }

    setPageNumber(0);
    setLoadedHistory([]);

    dispatch(
      actions.fetchBetHistoryRequest({
        currentPage: 0,
        pageSize: 20,
        beforeDate: beforeDate,
        afterDate: afterDate,
        state: state.toUpperCase(),
      }),
    );
  }, [beforeDate, afterDate, state]);

  const fetchResults = () => {
    dispatch(
      actions.fetchBetHistoryRequest({
        currentPage: pageNumber,
        pageSize: 20,
        beforeDate: beforeDate,
        afterDate: afterDate,
        state: state.toUpperCase(),
      }),
    );
  };

  return (
    <Wrapper>
      <ScheduleTitle>Betting History</ScheduleTitle>
      <FilterWrapper>
        <DropDownFilter
          heading={'Result filter'}
          values={['All', 'Won', 'Lost', 'Pending']}
          onChange={value => setState(value)}
        />
        <DateRangeFilter
          onBeforeChange={value => setBeforeDate(new Date(value))}
          onAfterChange={value => setAfterDate(new Date(value))}
        />
      </FilterWrapper>
      <Separator />
      <HistoryGroup items={loadedHistory} />
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
