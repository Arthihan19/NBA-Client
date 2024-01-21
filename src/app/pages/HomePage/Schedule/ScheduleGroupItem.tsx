import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from '../../../../styles/StyleConstants';
import plusIcon from './assets/plus.png';

interface Props {
  item: ScheduleItem;
  onClick?: (betTeamId: string) => void;
}

export function ScheduleGroupItem(props: Props) {
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

  return (
    <Wrapper>
      <MainContentWrapper>
        <TeamContentWrapper>
          <BetOverlay
            onClick={() => props.onClick && props.onClick(props.item.teamOneId)}
          >
            <PlusIcon src={plusIcon} alt="Add bet" />
            <AddBetText>Add bet for {props.item.teamOne}</AddBetText>
          </BetOverlay>
          <TeamInnerWrapper>
            <TeamImage src={props.item.teamOneImage} alt="Team 1" />
            <TeamNameSpan>{props.item.teamOne}</TeamNameSpan>
          </TeamInnerWrapper>
        </TeamContentWrapper>
        <MatchInfoWrapper>
          <DateSpan>{formatDateTime(props.item.matchDate)}</DateSpan>
          <VsSpan>VS</VsSpan>
        </MatchInfoWrapper>
        <TeamContentWrapper>
          <BetOverlay
            onClick={() => props.onClick && props.onClick(props.item.teamTwoId)}
          >
            <PlusIcon src={plusIcon} alt="Add bet" />
            <AddBetText>Add bet for {props.item.teamTwo}</AddBetText>
          </BetOverlay>
          <TeamInnerWrapper>
            <TeamImage src={props.item.teamTwoImage} alt="Team 2" />
            <TeamNameSpan>{props.item.teamTwo}</TeamNameSpan>
          </TeamInnerWrapper>
        </TeamContentWrapper>
      </MainContentWrapper>
      <FooterWrapper>
        <OddsNumberSpan>{props.item.teamOneOdds}</OddsNumberSpan>
        <OddsTextSpan>ODDS</OddsTextSpan>
        <OddsNumberSpan>{props.item.teamTwoOdds}</OddsNumberSpan>
      </FooterWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 0.15em solid ${p => p.theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${StyleConstants.BORDER_RADIUS_SMALL};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 1em;
  width: 100%;
  height: 100%;
`;

const MainContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const PlusIcon = styled.img`
  width: 2em;
  height: 2em;
  margin-bottom: 0.5em;
`;

const AddBetText = styled.span`
  color: ${p => p.theme.background};
  font-size: 1rem;
  font-weight: 400;
`;

const BetOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${p =>
    p.theme.backgroundVariantBlue}; // Semi-transparent black background
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;
  padding: 1em;
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 1;
  }
`;

const TeamInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 1.7em 1em 1.7em;
`;

const TeamContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  &:hover ${BetOverlay} {
    opacity: 1;
  }
`;
const TeamImage = styled.img`
  width: 4em;
  height: 4em;
  object-fit: contain;
  border-radius: 50%;
  border: 0.1em solid ${p => p.theme.backgroundVariantBlue};
`;

const TeamNameSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 0.5em;
`;

const MatchInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0.8em 0.25em 0.8em;
`;

const DateSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.7rem;
  font-weight: 300;
  white-space: pre-line;
  text-align: center;
`;

const VsSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 1.6rem;
  font-weight: bold;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 0.15em solid ${p => p.theme.primary};
  padding: 0.5em 1.5em 0.5em 1.5em;
`;

const OddsNumberSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 1rem;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

const OddsTextSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 1rem;
  flex: 1;
  text-align: center;
  font-weight: 300;
`;
