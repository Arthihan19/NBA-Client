import * as React from 'react';
import styled from 'styled-components/macro';
import logo from './assets/logo.png';

export function Logo() {
  return (
    <Wrapper>
      <LogoImage src={logo} alt="Logo" />
      <Title>NBA Betting</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
`;

const LogoImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  margin-right: 1rem;
`;
