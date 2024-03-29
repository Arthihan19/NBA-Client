import * as React from 'react';
import styled from 'styled-components/macro';
import coins from './assets/coins.png';

interface Props {
  balanceAmount: string;
}

export function Balance(props: Props) {
  const formatCurrency = amount => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <Wrapper>
      <Title>Balance:</Title>
      <Value>{formatCurrency(props.balanceAmount)}</Value>
      <CoinsImage src={coins} alt="Coins" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2em;
`;

const CoinsImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Title = styled.div`
  font-size: 1.3rem;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  margin-right: 0.25rem;
`;

const Value = styled.div`
  font-size: 1.3rem;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  margin-right: 0.2rem;
`;
