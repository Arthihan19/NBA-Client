// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { userActions as actions } from '.';

// function* doSomething() {}

// export function* userSaga() {
// yield takeLatest(actions.someAction.type, doSomething);
// }

import { takeLatest, call, put } from 'redux-saga/effects';
import { request } from 'utils/request';
import { userActions } from './index';

function* signInSaga(action) {
  try {
    const response = yield call(
      request,
      'http://localhost:8080/api/auth/signin',
      {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.payload),
      },
    );
    yield put(userActions.signInSuccess(response));
  } catch (error: any) {
    if (error.response) {
      const errorBody = yield call([error.response, 'json']);

      console.log(errorBody.message);

      yield put(userActions.signInFailure(errorBody.message));
    } else {
      yield put(userActions.signInFailure(error.message));
    }
  }
}

function* signUpSaga(action) {
  try {
    const response = yield call(
      request,
      'http://localhost:8080/api/auth/signup',
      {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.payload),
      },
    );
    yield put(userActions.signUpSuccess(response));
  } catch (error: any) {
    if (error.response) {
      const errorBody = yield call([error.response, 'json']);

      console.log(errorBody.message);

      yield put(userActions.signUpFailure(errorBody.message));
    } else {
      yield put(userActions.signUpFailure(error.message));
    }
  }
}

function* getMeSaga() {
  try {
    const response = yield call(request, 'http://localhost:8080/api/auth/me', {
      method: 'GET',
      credentials: 'include',
    });

    yield put(userActions.getMeSuccess(response));
  } catch (error: any) {
    if (error.response) {
      try {
        const errorBody = yield call([error.response, 'json']);

        yield put(userActions.getMeFailure(errorBody.message));
      } catch (e) {
        yield put(userActions.getMeFailure(error.message));
      }
    } else {
      yield put(userActions.getMeFailure(error.message));
    }
  }
}

function clearAuthCookies() {
  document.cookie = 'accessToken=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = 'refreshToken=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
}

function* logoutSaga() {
  clearAuthCookies();
  yield put(userActions.logout());
}

export default function* userSaga() {
  yield takeLatest(userActions.signInRequest.type, signInSaga);
  yield takeLatest(userActions.signUpRequest.type, signUpSaga);
  yield takeLatest(userActions.getMeRequest.type, getMeSaga);
  yield takeLatest(userActions.logout.type, logoutSaga);
}
