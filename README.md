# NBA fake currency betting game Client

## Table of contents

1. [Description](#description)
2. [Demo](#demo)
3. [Tech stack](#tech-stack)
4. [Features](#features)
5. [Usage](#usage)

## Description

## Note: this is the frontend repository for the backend code please visit https://github.com/....

This project offers an engaging NBA betting game, complete with a virtual currency system. Initially, users are provided with 1,000 coins upon registration. Following this, they receive a daily bonus of 2,000 coins. These coins can be used for wagering on forthcoming NBA games, typically those that are scheduled to take place within the next 48 hours and come with pre-set betting odds. The game periodically distributes rewards based on the outcomes of these matches. Wins and losses from these bets are accordingly updated in the user's account, reflecting their betting performance. A leaderboard system also exists to see how you stack up with other users.

An instance of this front-end React app is hosted on vercel here: TODO
And the backend is hosted here: TODO

## Demo

TODO


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

- `git clone https://github.com/LOL/nba-LOL`
- Please use yarn as this was made using [Create React App](https://github.com/facebook/create-react-app) that recommends it over npm
- `cd nba && yarn install`
- `yarn start`
- Make sure to also follow the backend setup (https://github.com/Arthihan19/NBA-Server)
