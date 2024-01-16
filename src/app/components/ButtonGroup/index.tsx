import * as React from 'react';
import styled from 'styled-components/macro';
import { ButtonGroupItem } from './ButtonGroupItem';

interface Props {
  buttonOptions: {
    title: string;
    onClick: () => void;
  }[];
  selectedButtonIndex: number;
}

export function ButtonGroup(props: Props) {
  return (
    <Wrapper>
      {props.buttonOptions.map((buttonOption, index) => (
        <ButtonGroupItem
          key={index}
          title={buttonOption.title}
          onClick={buttonOption.onClick}
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
  flex: 1;
`;
