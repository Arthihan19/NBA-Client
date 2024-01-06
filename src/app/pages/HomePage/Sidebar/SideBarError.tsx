import * as React from 'react';
import styled from 'styled-components/macro';
import danger from './assets/danger.png';

interface Props {
  errorMessage?: string;
}

export function SideBarError(props: Props) {
  return (
    <Wrapper>
      <DangerIcon src={danger} />
      <ErrorMessageSpan>{props.errorMessage}</ErrorMessageSpan>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => p.theme.backgroundVariantRed};
  width: 100%;
`;

const DangerIcon = styled.img`
  height: 2em;
  width: 2em;
  margin-right: 0.5em;
`;

const ErrorMessageSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.9rem;
  font-weight: bold;
`;
