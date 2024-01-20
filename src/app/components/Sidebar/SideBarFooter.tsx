import * as React from 'react';
import styled from 'styled-components/macro';
import reload from './assets/reload.png';
import { SingleButton } from '../SingleButton';
import { StyleConstants } from '../../../styles/StyleConstants';
import { useDispatch, useSelector } from 'react-redux';
import { selectBet } from '../../pages/HomePage/slice/selectors';
import { useBetSlice } from '../../pages/HomePage/slice';

export function SideBarFooter() {
  const { betSlip } = useSelector(selectBet);
  const { actions } = useBetSlice();
  const dispatch = useDispatch();

  const calculateTotalOdds = () => {
    return betSlip.reduce((accumulator, currentValue) => {
      return (
        accumulator *
        (currentValue.betTeamId === currentValue.teamOneId
          ? Number(currentValue.teamOneOdds)
          : Number(currentValue.teamTwoOdds))
      );
    }, 1);
  };

  const calculateTotalAmountBet = () => {
    return betSlip.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue.betAmount);
    }, 0);
  };

  const calculateTotalPotential = () => {
    return calculateTotalOdds() * calculateTotalAmountBet();
  };

  const onPlaceBetClick = () => {
    dispatch(actions.sendBetSlipRequest(betSlip));
  };

  return (
    <Wrapper>
      <HeaderTextSpan>Total</HeaderTextSpan>
      <Separator />
      <MainContentWrapper>
        <MainTextContentWrapper>
          <MainTextSpan>Betting odds: {calculateTotalOdds()}</MainTextSpan>
          <MainTextSpan>Amount bet: {calculateTotalAmountBet()}</MainTextSpan>
          <MainTextSpan>
            Potential to collect {calculateTotalPotential()}
          </MainTextSpan>
        </MainTextContentWrapper>
        <MainActionContentWrapper>
          {/*<ReloadImage src={reload} />*/}
          <PlaceBetButton onClick={onPlaceBetClick}>Place bet</PlaceBetButton>
        </MainActionContentWrapper>
      </MainContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 1em;
`;

const HeaderTextSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.9rem;
  font-weight: bold;
`;

const Separator = styled.hr`
  width: 95%;
  border: none;
  border-top: 0.1em solid ${p => p.theme.border};
  opacity: 0.1;
  margin: 0.5em 0;
`;

const MainContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em;
`;

const MainTextContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const MainTextSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.2em;
`;

const MainActionContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

const ReloadImage = styled.img`
  height: 1.5em;
  width: 1.5em;
  margin-right: 1em;
  cursor: pointer;
  transition: opacity 0.2s;
  background: ${p => p.theme.backgroundVariantRed};
  padding: 0.2em;
  border-radius: ${StyleConstants.BORDER_RADIUS_STANDARD};
  box-sizing: content-box;

  &:hover {
    opacity: 1;
    background: ${p => p.theme.secondary};
    border-radius: ${StyleConstants.BORDER_RADIUS_STANDARD};
  }
`;

const PlaceBetButton = styled.a`
  color: ${p => p.theme.background};
  border: 1px solid ${p => p.theme.secondary};
  border-radius: ${StyleConstants.BORDER_RADIUS_STANDARD};
  background: ${p => p.theme.secondary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.3rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  align-items: center;

  &:hover {
    opacity: 0.8;
    color: ${p => p.theme.secondary};
    border: 1px solid ${p => p.theme.secondary};
    background: ${p => p.theme.background};
  }

  &:active {
    opacity: 0.4;
  }
`;
