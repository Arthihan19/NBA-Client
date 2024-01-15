import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { useTranslation } from 'react-i18next';
import { BetsPage } from './pages/BetsPage/Loadable';
import { LoginPage } from './pages/LoginPage/Loadable';
import { LeaderBoardPage } from './pages/LeaderboardPage/Loadable';
import { SignUpPage } from './pages/SignupPage/Loadable';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useUserSlice } from './Authentication/slice';

export function App() {
  const { actions } = useUserSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getMeRequest());
  }, [dispatch, actions]);

  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <BetsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <PrivateRoute>
              <LeaderBoardPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
