import * as React from 'react';
import styled from 'styled-components/macro';
import { ButtonGroupItem } from './ButtonGroupItem';

interface Props {
  buttonNames: string[];
  selectedButtonIndex: number;
}

export function ButtonGroup(props: Props) {
  return (
    <Wrapper>
      {props.buttonNames.map((buttonName, index) => (
        <ButtonGroupItem
          key={buttonName}
          title={buttonName}
          isSelected={index === props.selectedButtonIndex}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-content: center;
  justify-content: center;
`;
