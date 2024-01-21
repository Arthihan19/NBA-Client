import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  title: string;
  isSelected: boolean;
  onClick?: () => void;
}

export function ButtonGroupItem(props: Props) {
  return (
    <Wrapper>
      <Item onClick={props.onClick} isSelected={props.isSelected}>
        {props.title}
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.a<{ isSelected: boolean }>`
  color: ${p => p.theme.secondary};
  background: ${p =>
    p.isSelected ? p.theme.backgroundVariantLight : p.theme.background};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.8;
    background: ${p => p.theme.backgroundVariantRed};
  }

  &:active {
    opacity: 0.4;
  }
`;
