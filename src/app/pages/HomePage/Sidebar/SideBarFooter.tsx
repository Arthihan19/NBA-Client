import * as React from 'react';
import styled from 'styled-components/macro';
import reload from './assets/reload.png';
import { SingleButton } from '../../../components/SingleButton';
import { StyleConstants } from '../../../../styles/StyleConstants';

export function SideBarFooter() {
  return (
    <Wrapper>
      <HeaderTextSpan>Total</HeaderTextSpan>
      <Separator />
      <MainContentWrapper>
        <MainTextContentWrapper>
          <MainTextSpan>Betting odds: 34.00</MainTextSpan>
          <MainTextSpan>Amount bet: $100</MainTextSpan>
          <MainTextSpan>Potential to collect $1000</MainTextSpan>
        </MainTextContentWrapper>
        <MainActionContentWrapper>
          <ReloadImage src={reload} />
          <PlaceBetButton>Place bet</PlaceBetButton>
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
