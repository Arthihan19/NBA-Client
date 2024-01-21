import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import styled from 'styled-components/macro';
import { LeaderBoard } from './Leaderboard';

export function LeaderBoardPage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <Wrapper>
        <PageWrapper>
          <LeaderBoard />
        </PageWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header`
  display: flex;

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
`;
