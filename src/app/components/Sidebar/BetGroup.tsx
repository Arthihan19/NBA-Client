import * as React from 'react';
import styled from 'styled-components/macro';
import { BetGroupItem } from './BetGroupItem';
import { BetSlipItem } from '../../pages/HomePage/slice/types';

interface Props {
  items: BetSlipItem[];
}

export function BetGroup(props: Props) {
  return (
    <Wrapper>
      {props.items.map((item, index) => (
        <BetGroupItem key={index} item={item} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
