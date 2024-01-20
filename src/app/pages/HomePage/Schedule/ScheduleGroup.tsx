import * as React from 'react';
import styled from 'styled-components/macro';
import { ScheduleGroupItem } from './ScheduleGroupItem';

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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  justify-items: center;
  padding: 1em;
`;
