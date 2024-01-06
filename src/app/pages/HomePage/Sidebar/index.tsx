import * as React from 'react';
import styled from 'styled-components/macro';
import { SidebarNav } from './SidebarNav';
import { BetGroup } from './BetGroup';
import { SideBarError } from './SideBarError';
import { SideBarFooter } from './SideBarFooter';

export function Sidebar() {
  const testBetItems: BetSlipItem[] = [
    {
      id: '1',
      dateTimeOfMatch: '2024-05-01T10:00:00',
      teamOneName: 'Team 1',
      teamTwoName: 'Team 2',
      teamOneOdds: '1.5',
      teamTwoOdds: '2.5',
      teamSelected: 'Team 1',
      amountBet: '10.00',
    },
    {
      id: '2',
      dateTimeOfMatch: '2024-05-01T10:00:00',
      teamOneName: 'Team 1',
      teamTwoName: 'Team 2',
      teamOneOdds: '1.5',
      teamTwoOdds: '2.5',
      teamSelected: 'Team 1',
      amountBet: '10.00',
    },
  ];

  return (
    <Wrapper>
      <TopContentWrapper>
        <SidebarNav />
        {testBetItems.length === 0 ? (
          <EmptyTextSpan>
            No bets added... Hover a match to add a bet
          </EmptyTextSpan>
        ) : (
          <BetGroup items={testBetItems} />
        )}
      </TopContentWrapper>
      <BottomContentWrapper>
        <SideBarError errorMessage={'Insufficient funds'} />
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
