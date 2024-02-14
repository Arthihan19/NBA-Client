# NBA fake currency betting game Client

## Table of contents

1. [Description](#description)
2. [Demo](#demo)
3. [Tech stack](#tech-stack)
4. [Features](#features)
5. [Usage](#usage)

## Description

## Note: this is the frontend repository for the backend code please visit https://github.com/Arthihan19/NBA-Server

This project offers an engaging NBA betting game, complete with a virtual currency system. Initially, users are provided with 1,000 coins upon registration. Following this, they receive a daily bonus of 2,000 coins. These coins can be used for wagering on forthcoming NBA games, typically those that are scheduled to take place within the next 48 hours and come with pre-set betting odds. The game periodically distributes rewards based on the outcomes of these matches. Wins and losses from these bets are accordingly updated in the user's account, reflecting their betting performance. A leaderboard system also exists to see how you stack up with other users.

An instance of this front-end React app is hosted on vercel here: https://nba-fake-bet.vercel.app
And the backend is hosted here: https://nba-backend-api.onrender.com/

## Demo

<img width="909" alt="SignUp" src="https://github.com/Arthihan19/NBA-Client/assets/106946860/74310028-bd96-4876-8be9-b2cd00b5f7bc">
<img width="935" alt="Home" src="https://github.com/Arthihan19/NBA-Client/assets/106946860/6eaefa34-9711-4778-a4c3-11eb963f8327">
<img width="885" alt="Leaderboard" src="https://github.com/Arthihan19/NBA-Client/assets/106946860/aa525059-a726-4c3c-9f4d-249c90cf8719">
<img width="861" alt="History" src="https://github.com/Arthihan19/NBA-Client/assets/106946860/fd3eb884-7e37-4bb0-822b-49b41477eb7f">

## Tech-stack

- [React](https://react.dev/)
- [Styled components library](https://styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/) + [sagas](https://redux-saga.js.org/)
- [Nodejs + Postgresql backend](https://github.com/LOL/nba-app-backend)

## Features

- User sign up and registration
- Real NBA schedule displaying information about past and future matches and their real betting odds
- Users are given fake currency on sign up and on a daily
- Users can bet their currency on NBA matches with odds
- Twice a day NBA schedule is scanned for completed games resulting in reward distribution and a bet status update for each participating user
- Users can view all their bets and their status
- Users can also see how they stack up against everyone else on a leaderboard

## Usage

- `git clone [https://github.com/LOL/nba-LOL](https://github.com/Arthihan19/NBA-Client)`
- Please use yarn as this was made using [Create React App](https://github.com/facebook/create-react-app) that recommends it over npm
- `cd nba && yarn install`
- `yarn start`
- Make sure to also follow the backend setup (https://github.com/Arthihan19/NBA-Server)
