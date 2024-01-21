import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from '../../../../styles/StyleConstants';
import { BetHistoryItem } from '../slice/types';
import { BetStateScheduleItem } from '../../HomePage/slice/types';

interface Props {
  item: BetHistoryItem;
}

export function HistoryGroupItem(props: Props) {
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
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const calculatePotentialCollect = () => {
    const odds =
      props.item.betTeamId === props.item.teamOneId
        ? props.item.teamOneOdds
        : props.item.teamTwoOdds;
    return formatCurrency(Number(props.item.betAmount) * Number(odds));
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <TeamsVsWrapper>
          <TeamNameSpan>{props.item.teamOne}</TeamNameSpan>
          <VsSpan>VS</VsSpan>
          <TeamNameSpan>{props.item.teamTwo}</TeamNameSpan>
        </TeamsVsWrapper>
        <MatchDateTimeSpan>
          {formatDateTime(props.item.matchDate)}
        </MatchDateTimeSpan>
      </HeaderWrapper>
      <ContentWrapper>
        <ContentItemWrapper>
          <ContentItemHeaderSpan>Team to win</ContentItemHeaderSpan>
          <SelectTeamDropDown
            disabled={true}
            value={
              props.item.betTeamId === props.item.teamOneId
                ? props.item.teamOneId
                : props.item.teamTwoId
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
              type="text"
              value={formatCurrency(props.item.betAmount)}
              disabled={true}
            />
          </CurrencyInputWrapper>
          <ContentFooterSpan>
            Potential to collect: {calculatePotentialCollect()}
          </ContentFooterSpan>
        </ContentItemWrapper>
      </ContentWrapper>
      <BetStatusWrapper state={props.item.state}>
        <BetStatusSpan>{props.item.state}</BetStatusSpan>
      </BetStatusWrapper>
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
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
  max-width: 6em;

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

const BetStatusWrapper = styled.div<{ state }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p =>
    p.state === 'LOST'
      ? p.theme.secondary
      : p.state === 'WON'
      ? p.theme.success
      : p.theme.backgroundVariantBlue};
  width: 100%;
  margin-top: 0.8em;
  padding: 0.4em;
`;

const BetStatusSpan = styled.span`
  color: ${p => p.theme.background};
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
`;
