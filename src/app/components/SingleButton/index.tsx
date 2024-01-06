import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from '../../../styles/StyleConstants';

interface Props {
  title: string;
  filled: boolean;
}

export function SingleButton(props: Props) {
  return (
    <Wrapper>
      <Item filled={props.filled}>{props.title}</Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  flex: 1;
`;

const Item = styled.a<{ filled: boolean }>`
  color: ${p => (p.filled ? p.theme.background : p.theme.secondary)};
  border: 1px solid ${p => p.theme.secondary};
  border-radius: ${StyleConstants.BORDER_RADIUS_STANDARD};
  background: ${p => (p.filled ? p.theme.secondary : p.theme.background)};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.6rem 2rem;
  font-size: 0.9rem;
  font-weight: bold;
  align-items: center;

  &:hover {
    opacity: 0.8;
    color: ${p => (p.filled ? p.theme.secondary : p.theme.background)};
    border: 1px solid ${p => p.theme.secondary};
    background: ${p => (p.filled ? p.theme.background : p.theme.secondary)};
  }

  &:active {
    opacity: 0.4;
  }
`;
