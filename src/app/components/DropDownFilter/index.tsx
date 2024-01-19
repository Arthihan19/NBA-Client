import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from '../../../styles/StyleConstants';

interface Props {
  heading: string;
  values: string[];
  onChange?: (value: string) => void;
}

export function DropDownFilter(props: Props) {
  return (
    <Wrapper>
      <Heading>{props.heading}</Heading>
      <Select onChange={e => props.onChange && props.onChange(e.target.value)}>
        {props.values.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.span`
  color: ${p => p.theme.primary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  margin-right: 1em;
`;

const Select = styled.select`
  padding: 0.4em;
  border-radius: ${StyleConstants.BORDER_RADIUS_SMALL};
  color: ${p => p.theme.primary};
  border: 0.15em solid ${p => p.theme.primary};
  font-size: 1rem;
  font-weight: 500;
  text-align: center;

  &:hover {
    border-color: ${p => p.theme.secondary};
  }

  &:focus {
    border-color: ${p => p.theme.secondary};
  }
`;
