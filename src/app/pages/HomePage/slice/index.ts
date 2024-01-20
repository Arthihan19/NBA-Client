import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { betSaga } from './saga';
import { BetState } from './types';

export const initialState: BetState = {
  schedule: [],
  betSlip: [],
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
    addToBetSlip(state, action) {
      if (
        state.betSlip.some(item => item.id === action.payload.id) ||
        !action.payload.teamOneOdds
      ) {
        return;
      }

      state.betSlip.push(action.payload);
    },
    removeFromBetSlip(state, action) {
      state.betSlip = state.betSlip.filter(
        item => item.id !== action.payload.id,
      );
    },
    updateBetSlip(state, action) {
      const { id, betAmount, betTeamId } = action.payload;
      state.betSlip = state.betSlip.map(item => {
        if (item.id === id) {
          return {
            ...item,
            betAmount,
            betTeamId,
          };
        }
        return item;
      });
    },
    sendBetSlipRequest(state, action) {
      state.loading = true;
      state.error = null;
    },
    sendBetSlipRequestSuccess(state, action) {
      state.loading = false;
      state.betSlip = [];
    },
    sendBetSlipRequestFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
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
