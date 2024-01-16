import * as React from 'react';
import styled from 'styled-components/macro';
import { ButtonGroup } from '../ButtonGroup';
import { SingleButton } from '../SingleButton';
import { Balance } from './Balance';
import { useUserSlice } from '../../Authentication/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../Authentication/slice/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Nav() {
  const navigate = useNavigate();
  const { actions } = useUserSlice();
  const dispatch = useDispatch();
  const userState = useSelector(selectUser);

  const onLogOut = () => {
    dispatch(actions.logoutRequest());
    window.location.reload();
  };

  const onSignIn = () => {
    navigate('/signin');
  };

  return (
    <Wrapper>
      <ButtonGroupWrapper>
        <ButtonGroup
          buttonOptions={[
            { title: 'Bet', onClick: () => navigate('/') },
            { title: 'Leader board', onClick: () => navigate('/leaderboard') },
            { title: 'History', onClick: () => navigate('/history') },
          ]}
          selectedButtonIndex={0}
        />
      </ButtonGroupWrapper>
      {userState.user !== null ? (
        <SingleButton onClick={onLogOut} title={'Log out'} filled={false} />
      ) : (
        <SingleButton onClick={onSignIn} title={'Sign In'} filled={false} />
      )}
      {userState.user !== null && (
        <Balance balanceAmount={userState.user.currency} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 3;
`;

const ButtonGroupWrapper = styled.div`
  display: flex;
  flex: 2;
  margin-right: 2em;
`;
