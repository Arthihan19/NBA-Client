import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { betHistorySaga } from './saga';
import { BetHistoryState } from './types';

export const initialState: BetHistoryState = {
  betHistory: [],
  loading: false,
  error: null,
  currentPage: 0,
  pageSize: 20,
  beforeDate: '',
  afterDate: '',
  state: '',
};

const slice = createSlice({
  name: 'betHistory',
  initialState,
  reducers: {
    fetchBetHistoryRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.beforeDate = action.payload.beforeDate;
      state.afterDate = action.payload.afterDate;
      state.state = action.payload.state;
      state.pageSize = action.payload.pageSize;
      state.currentPage = action.payload.currentPage;
    },
    fetchBetHistorySuccess(state, action) {
      state.loading = false;
      state.betHistory = action.payload;
    },
    fetchBetHistoryFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: betHistoryActions } = slice;

export const useBetHistorySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: betHistorySaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useBetHistorySlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
