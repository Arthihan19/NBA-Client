import * as React from 'react';
import styled from 'styled-components/macro';
import reload from './assets/reload.png';
import { SingleButton } from '../SingleButton';
import { StyleConstants } from '../../../styles/StyleConstants';
import { useDispatch, useSelector } from 'react-redux';
import { selectBet } from '../../pages/HomePage/slice/selectors';
import { useBetSlice } from '../../pages/HomePage/slice';
import { useUserSlice } from '../../Authentication/slice';
import { Spinner } from '../Spinner';

export function SideBarFooter() {
  const { betSlip, loading } = useSelector(selectBet);
  const { actions } = useBetSlice();
  const dispatch = useDispatch();

  const [showSuccess, setShowSuccess] = React.useState<boolean>(false);

  const calculateTotalOdds = () => {
    return betSlip
      .reduce((accumulator, currentValue) => {
        return (
          accumulator *
          (currentValue.betTeamId === currentValue.teamOneId
            ? Number(currentValue.teamOneOdds)
            : Number(currentValue.teamTwoOdds))
        );
      }, 1)
      .toFixed(3);
  };

  const calculateTotalAmountBet = () => {
    return betSlip.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue.betAmount);
    }, 0);
  };

  const calculateTotalPotential = () => {
    const totalPotential =
      Number(calculateTotalOdds()) * Number(calculateTotalAmountBet());

    if (!totalPotential) {
      return 0;
    }

    return totalPotential;
  };

  const onPlaceBetClick = () => {
    dispatch(actions.sendBetSlipRequest(betSlip));
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const formatCurrency = amount => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const isButtonDisabled = () => {
    if (betSlip.some(item => Number(item.betAmount) === 0)) {
      return true;
    }

    return calculateTotalAmountBet() <= 0;
  };

  return (
    <Wrapper>
      <HeaderTextSpan>Total</HeaderTextSpan>
      <Separator />
      <MainContentWrapper>
        <MainTextContentWrapper>
          {!showSuccess && (
            <>
              <MainTextSpan>Betting odds: {calculateTotalOdds()}</MainTextSpan>
              <MainTextSpan>
                Amount bet: {formatCurrency(calculateTotalAmountBet())}
              </MainTextSpan>
              <MainTextSpan>
                Potential to collect:{' '}
                {formatCurrency(calculateTotalPotential())}
              </MainTextSpan>
            </>
          )}
        </MainTextContentWrapper>
        <MainActionContentWrapper>
          {showSuccess ? (
            <SuccessMessageWrapper>
              <SuccessMessageSpan>Success!</SuccessMessageSpan>
              <SuccessMessageSpan>
                Check the history page to see the status.
              </SuccessMessageSpan>
            </SuccessMessageWrapper>
          ) : loading ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : (
            <PlaceBetButton
              onClick={() => calculateTotalAmountBet() > 0 && onPlaceBetClick()}
              disabled={isButtonDisabled()}
              isDisabled={isButtonDisabled()}
            >
              Place bet
            </PlaceBetButton>
          )}
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
  height: 100%;
  margin-top: 1em;
`;

const HeaderTextSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.9rem;
  font-weight: bold;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const SuccessMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 1em;
`;

const SuccessMessageSpan = styled.span`
  color: ${p => p.theme.success};
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const PlaceBetButton = styled.button<{ isDisabled }>`
  color: ${p => p.theme.background};
  border: 1px solid ${p => !p.isDisabled && p.theme.secondary};
  border-radius: ${StyleConstants.BORDER_RADIUS_STANDARD};
  background: ${p =>
    p.isDisabled ? p.theme.backgroundVariantRed : p.theme.secondary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1em;

  &:hover {
    opacity: ${p => !p.isDisabled && 0.8};
    color: ${p => !p.isDisabled && p.theme.secondary};
    border: 1px solid ${p => !p.isDisabled && p.theme.secondary};
    background: ${p => !p.isDisabled && p.theme.background};
  }

  &:active {
    opacity: 0.4;
  }
`;
