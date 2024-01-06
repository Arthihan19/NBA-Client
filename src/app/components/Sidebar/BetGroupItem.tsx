import * as React from 'react';
import styled from 'styled-components/macro';
import binIcon from './assets/bin.png';
import { StyleConstants } from '../../../styles/StyleConstants';

interface Props {
  item: BetSlipItem;
}

export function BetGroupItem(props: Props) {
  const [betAmount, setBetAmount] = React.useState('');

  const handleDeleteClick = () => {
    // Placeholder for delete functionality
  };

  const handleBetAmountChange = event => {
    const value = event.target.value;
    // Ensure that the value is numeric and not negative
    if (!isNaN(value) && value >= 0) {
      setBetAmount(value);
    }
  };

  const formatDateTime = dateTime => {
    // Parse the date as UTC
    const date = new Date(dateTime + 'Z'); // Adding 'Z' ensures it's interpreted as UTC

    // Format the time and date as "HH:MM UTC DD/MM/YYYY"
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

  return (
    <Wrapper>
      <HeaderWrapper>
        <TeamsVsWrapper>
          <TeamNameSpan>{props.item.teamOneName}</TeamNameSpan>
          <VsSpan>VS</VsSpan>
          <TeamNameSpan>{props.item.teamTwoName}</TeamNameSpan>
        </TeamsVsWrapper>
        <MatchDateTimeSpan>
          {formatDateTime(props.item.dateTimeOfMatch)}
        </MatchDateTimeSpan>
        <DeleteIcon
          src={binIcon}
          alt="delete icon"
          onClick={handleDeleteClick}
        />
      </HeaderWrapper>
      <ContentWrapper>
        <ContentItemWrapper>
          <ContentItemHeaderSpan>Team to win</ContentItemHeaderSpan>
          <SelectTeamDropDown>
            <option key={0} value={props.item.teamOneName}>
              {props.item.teamOneName}
            </option>
            <option key={1} value={props.item.teamTwoName}>
              {props.item.teamTwoName}
            </option>
          </SelectTeamDropDown>
          <ContentFooterSpan>Betting odds: 2.35</ContentFooterSpan>
        </ContentItemWrapper>
        <ContentItemWrapper>
          <ContentItemHeaderSpan>Betting amount</ContentItemHeaderSpan>
          <CurrencyInputWrapper>
            <CurrencySymbol>$</CurrencySymbol>
            <CurrencyInput
              type="number"
              value={betAmount}
              onChange={handleBetAmountChange}
              min="0"
            />
          </CurrencyInputWrapper>
          <ContentFooterSpan>Potential to collect: $20.00</ContentFooterSpan>
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

const TeamsVsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const TeamNameSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.8rem;
  font-weight: 400;
`;

const VsSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.6rem;
  font-weight: bold;
  padding-left: 0.3em;
  padding-right: 0.3em;
`;

const MatchDateTimeSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.8rem;
  font-weight: 300;
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
