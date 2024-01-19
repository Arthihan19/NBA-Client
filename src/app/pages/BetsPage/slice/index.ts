import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { betSaga } from './saga';
import { BetState } from './types';

export const initialState: BetState = {
  schedule: [],
  loading: false,
  error: null,
  currentPage: 0,
  pageSize: 20,
  beforeDate: '',
  afterDate: '',
  teamName: '',
};

const slice = createSlice({
  name: 'bet',
  initialState,
  reducers: {
    fetchSchedule(state, action) {
      state.loading = true;
      state.error = null;
      state.beforeDate = action.payload.beforeDate;
      state.afterDate = action.payload.afterDate;
      state.teamName = action.payload.teamName;
      state.pageSize = action.payload.pageSize;
      state.currentPage = action.payload.currentPage;
    },
    fetchScheduleSuccess(state, action) {
      state.loading = false;
      state.schedule = action.payload;
    },
    fetchScheduleFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: betActions } = slice;

export const useBetSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: betSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useBetSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
