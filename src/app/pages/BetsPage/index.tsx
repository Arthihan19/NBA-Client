import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import styled from 'styled-components/macro';
import { Sidebar } from '../../components/Sidebar';
import { History } from './History';

export function BetsPage() {
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
          <History />
        </PageWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header`
  display: flex;

  ${PageWrapper} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
  }
`;
