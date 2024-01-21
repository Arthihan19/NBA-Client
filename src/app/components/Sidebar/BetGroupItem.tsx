import * as React from 'react';
import styled from 'styled-components/macro';
import binIcon from './assets/bin.png';
import { StyleConstants } from '../../../styles/StyleConstants';
import { BetSlipItem } from '../../pages/HomePage/slice/types';
import { useDispatch } from 'react-redux';
import { useBetSlice } from '../../pages/HomePage/slice';

interface Props {
  item: BetSlipItem;
}

export function BetGroupItem(props: Props) {
  const { actions } = useBetSlice();
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(actions.removeFromBetSlip({ id: props.item.id }));
  };

  const handleBetSlipItemChange = (id, betAmount, betTeamId) => {
    let formattedBetAmount = parseFloat(betAmount);

    if (isNaN(formattedBetAmount) || formattedBetAmount < 0) {
      formattedBetAmount = 0;
    } else if (formattedBetAmount > 1000000) {
      formattedBetAmount = 1000000;
    }

    dispatch(
      actions.updateBetSlip({
        id: id,
        betAmount: formattedBetAmount,
        betTeamId: betTeamId,
      }),
    );
  };

  const formatDateTime = dateTime => {
    const date = new Date(dateTime);

    const timeString =
      date.getUTCHours().toString().padStart(2, '0') +
      ':' +
      date.getUTCMinutes().toString().padStart(2, '0') +
      ' UTC';
    const dateString =
      date.getUTCDate().toString().padStart(2, '0') +
      '/' +
      (date.getUTCMonth() + 1).toString().padStart(2, '0') +
      '/' +
      date.getUTCFullYear();
    return `${timeString}\n${dateString}`;
  };

  const formatCurrency = amount => {
    const formatter = new Intl.NumberFormat('en-US', {
      maximumSignificantDigits: 5,
      notation: 'compact',
      compactDisplay: 'short',
    });
    return formatter.format(amount);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <MatchDetailsWrapper>
          <TeamsVsWrapper>
            <TeamNameSpan>{props.item.teamOne}</TeamNameSpan>
            <VsSpan>VS</VsSpan>
            <TeamNameSpan>{props.item.teamTwo}</TeamNameSpan>
          </TeamsVsWrapper>
          <MatchDateTimeSpan>
            {formatDateTime(props.item.matchDate)}
          </MatchDateTimeSpan>
        </MatchDetailsWrapper>
        <DeleteIcon
          src={binIcon}
          alt="delete icon"
          onClick={handleDeleteClick}
        />
      </HeaderWrapper>
      <ContentWrapper>
        <ContentItemWrapper>
          <ContentItemHeaderSpan>Team to win</ContentItemHeaderSpan>
          <SelectTeamDropDown
            value={
              props.item.betTeamId === props.item.teamOneId
                ? props.item.teamOneId
                : props.item.teamTwoId
            }
            onChange={event =>
              handleBetSlipItemChange(
                props.item.id,
                props.item.betAmount,
                Number(event.target.value),
              )
            }
          >
            <option key={0} value={props.item.teamOneId}>
              {props.item.teamOne}
            </option>
            <option key={1} value={props.item.teamTwoId}>
              {props.item.teamTwo}
            </option>
          </SelectTeamDropDown>
          <ContentFooterSpan>
            Betting odds:
            {props.item.betTeamId === props.item.teamOneId
              ? props.item.teamOneOdds
              : props.item.teamTwoOdds}
          </ContentFooterSpan>
        </ContentItemWrapper>
        <ContentItemWrapper>
          <ContentItemHeaderSpan>Betting amount</ContentItemHeaderSpan>
          <CurrencyInputWrapper>
            <CurrencySymbol>$</CurrencySymbol>
            <CurrencyInput
              type="number"
              value={props.item.betAmount.toString().replace(/^0+/, '')}
              onChange={event =>
                handleBetSlipItemChange(
                  props.item.id,
                  Math.max(
                    0,
                    Number(parseFloat(event.target.value).toFixed(2)),
                  ),
                  props.item.betTeamId,
                )
              }
              min="0"
              step="0.01"
            />
          </CurrencyInputWrapper>
          <ContentFooterSpan>
            Potential to collect: $
            {formatCurrency(
              Number(props.item.betAmount) *
                Number(
                  props.item.betTeamId === props.item.teamOneId
                    ? props.item.teamOneOdds
                    : props.item.teamTwoOdds,
                ),
            )}
          </ContentFooterSpan>
        </ContentItemWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  outline: 0.05em solid ${p => p.theme.borderLight};
  padding: 0.7em;
  width: 100%;
  background: ${p => p.theme.background};
  margin-bottom: 0.2em;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const MatchDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

const TeamsVsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const TeamNameSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.9rem;
  font-weight: 500;
  font-style: italic;
`;

const VsSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 1rem;
  font-weight: bold;
  padding-left: 1em;
  padding-right: 1em;
`;

const MatchDateTimeSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.8rem;
  font-weight: 300;
  margin-top: 0.5em;
`;

const DeleteIcon = styled.img`
  width: 1.4em;
  height: 1.4em;
  cursor: pointer;
  transition: opacity 0.2s;
  background: ${p => p.theme.backgroundVariantRed};
  margin: 0.2em;
  padding: 0.2em;
  border-radius: ${StyleConstants.BORDER_RADIUS_STANDARD};
  box-sizing: content-box;

  &:hover {
    opacity: 1;
    background: ${p => p.theme.secondary};
    border-radius: ${StyleConstants.BORDER_RADIUS_STANDARD};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
`;

const ContentItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
`;

const ContentItemHeaderSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5em;
  margin-top: 1em;
`;

const SelectTeamDropDown = styled.select`
  padding: 0.4em;
  border-radius: ${StyleConstants.BORDER_RADIUS_SMALL};
  color: ${p => p.theme.textSecondary};
  border: 0.15em solid ${p => p.theme.borderLight};
  font-size: 0.8rem;
  font-weight: 500;
  height: 2.5em;
  max-width: 10em;

  &:hover {
    border-color: ${p => p.theme.primary};
  }

  &:focus {
    border-color: ${p => p.theme.primary};
  }
`;

const CurrencyInputWrapper = styled.span`
  display: flex;
  align-items: center;
  padding: 0.4em;
  border-radius: ${StyleConstants.BORDER_RADIUS_SMALL};
  color: ${p => p.theme.textSecondary};
  border: 0.15em solid ${p => p.theme.borderLight};
  font-size: 0.8rem;
  font-weight: 500;
  height: 2.5em;

  &:hover {
    border-color: ${p => p.theme.primary};
  }

  &:focus {
    border-color: ${p => p.theme.primary};
    outline: none;
  }
`;

const CurrencyInput = styled.input`
  border: 0;
  padding-left: 0.4em;
  font-size: inherit;
  color: inherit;
  width: 100%;

  &:hover {
    border-color: ${p => p.theme.primary};
  }

  &:focus {
    border-color: ${p => p.theme.primary};
    outline: none;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;

const CurrencySymbol = styled.span`
  margin-right: 0.4em;
`;

const ContentFooterSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.8rem;
  font-weight: 400;
  font-style: italic;
  margin-top: 0.8em;
`;
