import * as React from 'react';
import styled from 'styled-components/macro';
import { LeaderBoardGroup } from './LeaderBoardGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useLeaderboardSlice } from '../slice';
import { selectLeaderboard } from '../slice/selectors';
import { LeaderBoardUser } from '../slice/types';
import { SingleButton } from '../../../components/SingleButton';
import { Spinner } from '../../../components/Spinner';

export function LeaderBoard() {
  const { leaderBoard, loading, userPlacing } = useSelector(selectLeaderboard);
  const { actions } = useLeaderboardSlice();
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = React.useState<number>(0);

  const [loadedLeaderBoard, setLoadedLeaderBoard] = React.useState<
    LeaderBoardUser[]
  >([]);

  React.useEffect(() => {
    setPageNumber(0);
    setLoadedLeaderBoard([]);
    fetchResults();
  }, []);

  React.useEffect(() => {
    if (
      loadedLeaderBoard.length > 0 &&
      loadedLeaderBoard.every(item => loadedLeaderBoard.includes(item))
    ) {
      return;
    }

    setLoadedLeaderBoard([...loadedLeaderBoard, ...leaderBoard]);
  }, [leaderBoard]);

  const fetchResults = () => {
    dispatch(
      actions.fetchLeaderboardRequest({
        currentPage: pageNumber,
        pageSize: 20,
      }),
    );

    setPageNumber(pageNumber + 1);
  };

  return (
    <Wrapper>
      <LeaderBoardHeader>LeaderBoard</LeaderBoardHeader>
      {loading && loadedLeaderBoard.length <= 0 ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <>
          <LeaderBoardGroup
            items={loadedLeaderBoard}
            userPlacing={userPlacing}
          />
          {loading ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : (
            <SingleButton
              title={'Load more'}
              filled={false}
              onClick={() => {
                fetchResults();
              }}
            />
          )}
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 5em;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const LeaderBoardHeader = styled.h1`
  color: ${p => p.theme.secondary};
  text-decoration: none;
  font-size: 2.3rem;
  font-weight: 600;
  padding-top: 3%;
  padding-bottom: 3%;
`;
