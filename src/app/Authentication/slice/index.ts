import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import userSaga from './saga';
import { UserState } from './types';

export const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInRequest(
      state,
      action: PayloadAction<{ username: string; password: string }>,
    ) {
      state.loading = true;
      state.error = null;
    },
    signInSuccess(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.loading = false;
    },
    signInFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    signUpRequest(
      state,
      action: PayloadAction<{ username: string; password: string }>,
    ) {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.loading = false;
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    getMeRequest(state) {
      state.loading = true;
    },
    getMeSuccess(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.loading = false;
    },
    getMeFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    logoutRequest(state) {
      state.loading = true;
      state.error = null;
    },
    logOutSuccess(state) {
      state.loading = false;
      state.user = null;
      state.error = null;
    },
    logOutFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: userActions } = slice;

export const useUserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: userSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useUserSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
