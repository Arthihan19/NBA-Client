import * as React from 'react';
import styled from 'styled-components/macro';
import danger from './assets/danger.png';
import emailIcon from './assets/email.png';
import lockIcon from './assets/lock.png';
import { StyleConstants } from '../../../styles/StyleConstants';

interface Props {}

export function SignUp(props: Props) {
  return (
    <Wrapper>
      <SignInSpan>Sign up</SignInSpan>
      <MainInputWrapper>
        <InputHeaderSpan>Username</InputHeaderSpan>
        <Input type="text" placeholder="Enter your username" />
      </MainInputWrapper>
      <MainInputWrapper>
        <InputHeaderSpan>Email</InputHeaderSpan>
        <Input type="text" placeholder="Enter your email" />
      </MainInputWrapper>
      <MainInputWrapper>
        <InputHeaderSpan>Password</InputHeaderSpan>
        <Input type="text" placeholder="Enter your password" />
      </MainInputWrapper>
      <RememberMeWrapper>
        <RememberMeCheckBox />
        <RememberMeSpan>Remember me</RememberMeSpan>
      </RememberMeWrapper>
      <SignUpButton>Sign Up</SignUpButton>
      <OrSpan>Or</OrSpan>
      <SignInButton>Sign In</SignInButton>
      <ErrorMessageWrapper>
        <DangerIcon src={danger} />
        <ErrorMessageSpan>Invalid email</ErrorMessageSpan>
      </ErrorMessageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  border: 1px solid ${p => p.theme.border};
  box-shadow: 0 0 0.5em ${p => p.theme.border};
  padding: 2em;
`;

const SignInSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 2rem;
  font-weight: bold;
`;

const MainInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  min-width: 60%;
  margin-top: 1em;
`;

const InputHeaderSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.4em;
  border-radius: ${StyleConstants.BORDER_RADIUS_SMALL};
  color: ${p => p.theme.primary};
  border: 0.15em solid ${p => p.theme.primary};
  font-size: 1rem;
  font-weight: 500;
  width: 100%;

  &:hover {
    border-color: ${p => p.theme.secondary};
  }

  &:focus {
    border-color: ${p => p.theme.secondary};
    outline: none;
  }
`;

const RememberMeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const RememberMeCheckBox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5em;
  height: 1em;
  width: 1em;
  cursor: pointer;
`;

const RememberMeSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 1rem;
`;

const SignInButton = styled.a`
  color: ${p => p.theme.background};
  border: 1px solid ${p => p.theme.secondary};
  border-radius: ${StyleConstants.BORDER_RADIUS_STANDARD};
  background: ${p => p.theme.secondary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.3rem 3.3rem;
  font-size: 1rem;
  font-weight: bold;
  align-items: center;

  &:hover {
    opacity: 0.8;
    color: ${p => p.theme.secondary};
    border: 1px solid ${p => p.theme.secondary};
    background: ${p => p.theme.background};
  }

  &:active {
    opacity: 0.4;
  }
`;

const OrSpan = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
`;

const SignUpButton = styled.a`
  color: ${p => p.theme.background};
  border: 1px solid ${p => p.theme.secondary};
  border-radius: ${StyleConstants.BORDER_RADIUS_STANDARD};
  background: ${p => p.theme.secondary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.3rem 3rem;
  font-size: 1rem;
  font-weight: bold;
  align-items: center;

  &:hover {
    opacity: 0.8;
    color: ${p => p.theme.secondary};
    border: 1px solid ${p => p.theme.secondary};
    background: ${p => p.theme.background};
  }

  &:active {
    opacity: 0.4;
  }
`;

const ErrorMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => p.theme.backgroundVariantRed};
  width: 100%;
  margin-top: 2em;
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
