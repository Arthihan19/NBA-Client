import * as React from 'react';
import styled from 'styled-components/macro';
import { HistoryGroupItem } from './HistoryGroupItem';
import { BetHistoryItem } from '../slice/types';
import { media } from '../../../../styles/media';

interface Props {
  items: BetHistoryItem[];
}

export function HistoryGroup(props: Props) {
  return (
    <Wrapper>
      {props.items.map((item, index) => (
        <HistoryGroupItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  justify-items: center;
  padding: 1em;

  ${media.medium()} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.large()} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.xlarge()} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
