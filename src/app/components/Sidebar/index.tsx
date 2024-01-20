import * as React from 'react';
import styled from 'styled-components/macro';
import { SidebarNav } from './SidebarNav';
import { BetGroup } from './BetGroup';
import { SideBarError } from './SideBarError';
import { SideBarFooter } from './SideBarFooter';
import { useDispatch, useSelector } from 'react-redux';
import { selectBet } from '../../pages/HomePage/slice/selectors';
import { useBetSlice } from '../../pages/HomePage/slice';

export function Sidebar() {
  const { betSlip, error } = useSelector(selectBet);
  const { actions } = useBetSlice();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TopContentWrapper>
        <SidebarNav />
        {betSlip.length === 0 ? (
          <EmptyTextSpan>
            No bets added... Hover a match to add a bet
          </EmptyTextSpan>
        ) : (
          <BetGroup items={betSlip} />
        )}
      </TopContentWrapper>
      <BottomContentWrapper>
        {error ? <SideBarError errorMessage={error} /> : null}
        <SideBarFooter />
      </BottomContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex: 1.5;
  height: 100%;
  outline: 1px solid ${p => p.theme.borderLight};
  margin-top: 1em;
`;

const TopContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const BottomContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const EmptyTextSpan = styled.span`
  color: ${p => p.theme.primary};
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 20%;
`;
