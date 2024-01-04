import * as React from 'react';
import styled from 'styled-components/macro';
import { ScheduleGroupItem } from './ScheduleGroupItem';

interface Props {
  items: ScheduleItem[];
}

export function ScheduleGroup(props: Props) {
  return (
    <Wrapper>
      {props.items.map((item, index) => (
        <ScheduleGroupItem key={item.id} item={item} />
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
