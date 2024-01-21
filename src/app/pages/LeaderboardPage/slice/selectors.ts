import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.leaderboard || initialState;

export const selectLeaderboard = createSelector([selectSlice], state => state);
