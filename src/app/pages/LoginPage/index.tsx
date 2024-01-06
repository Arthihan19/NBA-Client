import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import styled from 'styled-components/macro';
import { Login } from './Login';
import { SignUp } from './SignUp';

export function LoginPage() {
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
        {/*<Login />*/}
        <SignUp />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;
