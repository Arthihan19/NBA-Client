import * as React from 'react';
import styled from 'styled-components/macro';
import { LeaderBoardUser } from '../slice/types';
import { LeaderBoardGroupItem } from './LeaderBoardGroupItem';

interface Props {
  items: LeaderBoardUser[];
  userPlacing: string;
}

export function LeaderBoardGroup(props: Props) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>No.</TableHeader>
          <TableHeader>Username</TableHeader>
          <TableHeader>Balance</TableHeader>
          <TableHeader>Total Bets Won</TableHeader>
          <TableHeader>Bets Lost</TableHeader>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) => (
          <LeaderBoardGroupItem
            key={item.username}
            item={item}
            userPlacing={props.userPlacing}
            placingNumber={index + 1}
          />
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${p => p.theme.background};
  margin-bottom: 1em;
`;

const TableHeader = styled.th`
  padding: 0.8em;
  text-align: left;
  background-color: ${p => p.theme.background};
  color: ${p => p.theme.textSecondary};
  border-bottom: 1px solid ${p => p.theme.border};
`;
