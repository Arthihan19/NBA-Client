import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { leaderboardSaga } from './saga';
import { LeaderboardState } from './types';

export const initialState: LeaderboardState = {
  userPlacing: '',
  leaderBoard: [],
  loading: false,
  error: null,
  currentPage: 0,
  pageSize: 20,
};

const slice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    fetchLeaderboardRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.pageSize = action.payload.pageSize;
      state.currentPage = action.payload.currentPage;
    },
    fetchLeaderboardSuccess(state, action) {
      state.loading = false;
      state.leaderBoard = action.payload.leaderboard;
      state.userPlacing = action.payload.userPlacing;
    },
    fetchLeaderboardFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: leaderboardActions } = slice;

export const useLeaderboardSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: leaderboardSaga });
  return { actions: slice.actions };
};
