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
      {/*<Item*/}
      {/*  href=""*/}
      {/*  target="_blank"*/}
      {/*  title="Documentation Page"*/}
      {/*  rel="noopener noreferrer"*/}
      {/*>*/}
      {/*  Games*/}
      {/*</Item>*/}
      {/*<Item*/}
      {/*  href=""*/}
      {/*  target="_blank"*/}
      {/*  title="Github Page"*/}
      {/*  rel="noopener noreferrer"*/}
      {/*>*/}
      {/*  LeaderBoard*/}
      {/*</Item>*/}
      {/*<Item*/}
      {/*  href=""*/}
      {/*  target="_blank"*/}
      {/*  title="Documentation Page"*/}
      {/*  rel="noopener noreferrer"*/}
      {/*>*/}
      {/*  Bets*/}
      {/*</Item>*/}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
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
