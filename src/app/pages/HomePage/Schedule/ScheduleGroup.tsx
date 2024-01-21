import * as React from 'react';
import styled from 'styled-components/macro';
import { ScheduleGroupItem } from './ScheduleGroupItem';
import { media } from '../../../../styles/media';

interface Props {
  items: ScheduleItem[];
  onClick?: (item: ScheduleItem, betTeamId) => void;
}

export function ScheduleGroup(props: Props) {
  return (
    <Wrapper>
      {props.items.map((item, index) => (
        <ScheduleGroupItem
          key={item.id}
          item={item}
          onClick={betTeamId => props.onClick && props.onClick(item, betTeamId)}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1em;
  justify-items: center;
  padding: 1em;
  flex-shrink: 3;

  ${media.large()} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.xlarge()} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
