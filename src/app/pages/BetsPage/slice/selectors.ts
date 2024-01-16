import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './index';

const selectSlice = (state: RootState) => state.bet || initialState;

export const selectBet = createSelector([selectSlice], state => state);
