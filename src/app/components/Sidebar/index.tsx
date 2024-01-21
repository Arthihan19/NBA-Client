import * as React from 'react';
import styled from 'styled-components/macro';
import { BetGroup } from './BetGroup';
import { SideBarError } from './SideBarError';
import { SideBarFooter } from './SideBarFooter';
import { useSelector } from 'react-redux';
import { selectBet } from '../../pages/HomePage/slice/selectors';
import { StyleConstants } from '../../../styles/StyleConstants';

export function Sidebar() {
  const { betSlip, error } = useSelector(selectBet);

  return (
    <Wrapper>
      <TopContentWrapper>
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
  outline: 2px solid ${p => p.theme.border};
  border-radius: ${StyleConstants.BORDER_RADIUS_STANDARD};
  background: ${p => p.theme.backgroundVariantRedLowOpacity};
  flex-grow: 2;
  margin-top: 2em;
  padding: 1em;
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
  text-align: center;
  width: 50%;
`;
