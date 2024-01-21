import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.betHistory || initialState;

export const selectBetHistory = createSelector([selectSlice], state => state);
