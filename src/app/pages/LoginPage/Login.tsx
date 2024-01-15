import * as React from 'react';
import styled from 'styled-components/macro';
import danger from './assets/danger.png';
import { StyleConstants } from '../../../styles/StyleConstants';
import { useUserSlice } from '../../Authentication/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../Authentication/slice/selectors';
import { Spinner } from '../../components/Spinner';

interface Props {}

export function Login(props: Props) {
  const navigate = useNavigate();
  const { actions } = useUserSlice();
  const dispatch = useDispatch();
  const userState = useSelector(selectUser);

  const [showError, setShowError] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (userState.user !== null) {
      navigate('/');
    }
  }, [userState.user, navigate]);

  const onSubmit = () => {
    setShowError(true);
    dispatch(actions.signInRequest({ username, password }));
  };

  const onSignUp = () => {
    navigate('/signup');
  };

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  return (
    <Wrapper>
      <SignInSpan>Sign In</SignInSpan>
      <MainInputWrapper>
        <InputHeaderSpan>Username</InputHeaderSpan>
        <Input
          type="text"
          placeholder="Enter your username"
          onChange={handleUsernameChange}
        />
      </MainInputWrapper>
      <MainInputWrapper>
        <InputHeaderSpan>Password</InputHeaderSpan>
        <Input
          type="password" // Change type to 'password' for security
          placeholder="Enter your password"
          onChange={handlePasswordChange}
        />
      </MainInputWrapper>
      {userState.loading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <>
          <SignInButton onClick={onSubmit}>Sign In</SignInButton>
          <OrSpan>OR</OrSpan>
          <SignUpButton onClick={onSignUp}>Sign Up</SignUpButton>
        </>
      )}
      {userState.error && showError && (
        <ErrorMessageWrapper>
          <DangerIcon src={danger} />
          <ErrorMessageSpan>{userState.error}</ErrorMessageSpan>
        </ErrorMessageWrapper>
      )}
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

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
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
  margin-top: 2em;

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
