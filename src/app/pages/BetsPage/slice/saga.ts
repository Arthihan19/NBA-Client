// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { betHistoryActions as actions } from '.';

// function* doSomething() {}

import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from '../../../../utils/request';
import { betHistoryActions as actions } from '.';

function* fetchBetHistorySaga(action) {
  try {
    const { currentPage, pageSize, beforeDate, afterDate, state } =
      action.payload;

    const queryParams = new URLSearchParams({
      ...(currentPage && { page: currentPage.toString() }),
      ...(pageSize && { pageSize: pageSize.toString() }),
      ...(beforeDate && { beforeDate: beforeDate.toISOString() }),
      ...(afterDate && { afterDate: afterDate.toISOString() }),
      ...(state && { state }),
    }).toString();

    const url = `http://localhost:8080/api/bets?${queryParams}`;

    const response = yield call(request, url, {
      method: 'GET',
      credentials: 'include',
    });

    yield put(actions.fetchBetHistorySuccess(response));
  } catch (error: any) {
    if (error.response) {
      const errorBody = yield call([error.response, 'json']);
      yield put(actions.fetchBetHistoryFailure(errorBody.message));
    } else {
      yield put(actions.fetchBetHistoryFailure(error.message));
    }
  }
}

export function* betHistorySaga() {
  yield takeLatest(actions.fetchBetHistoryRequest.type, fetchBetHistorySaga);
}
