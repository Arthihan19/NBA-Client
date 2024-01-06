import * as React from 'react';
import styled from 'styled-components/macro';
import { ButtonGroup } from '../ButtonGroup';
import { SingleButton } from '../SingleButton';
import { Balance } from './Balance';

export function Nav() {
  return (
    <Wrapper>
      <ButtonGroupWrapper>
        <ButtonGroup
          buttonNames={['Games', 'Leader board', 'Bets']}
          selectedButtonIndex={0}
        />
      </ButtonGroupWrapper>
      <SingleButton title={'Log out'} filled={false} />
      <Balance balanceAmount={'10.00'} />
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
