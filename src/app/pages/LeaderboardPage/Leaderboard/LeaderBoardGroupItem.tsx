import * as React from 'react';
import styled from 'styled-components/macro';
import { LeaderBoardUser } from '../slice/types';

interface Props {
  item: LeaderBoardUser;
  userPlacing: string;
  placingNumber: number;
}

export function LeaderBoardGroupItem(props: Props) {
  const isCurrentUser = props.item.placing === props.userPlacing;
  return (
    <TableRow isCurrentUser={isCurrentUser}>
      <TableCell>{props.placingNumber}</TableCell>
      <TableCell>{props.item.username}</TableCell>
      <TableCell>${props.item.currency}</TableCell>
      <TableCell>{props.item.bets_won}</TableCell>
      <TableCell>{props.item.bets_lost}</TableCell>
    </TableRow>
  );
}

const TableRow = styled.tr<{ isCurrentUser: boolean }>`
  background-color: ${props =>
    props.isCurrentUser ? p => p.theme.backgroundVariantRed : 'transparent'};
  color: ${props =>
    props.isCurrentUser ? 'white' : p => p.theme.textSecondary};
`;

const TableCell = styled.td`
  padding: 0.8em;
  border-bottom: 1px solid ${p => p.theme.border};
`;
