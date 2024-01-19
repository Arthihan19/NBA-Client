import { takeLatest, call, put } from 'redux-saga/effects';
import { request } from 'utils/request';
import { betActions as actions } from './index';

function* fetchScheduleSaga(action) {
  try {
    const { currentPage, pageSize, beforeDate, afterDate, teamName } =
      action.payload;

    const queryParams = new URLSearchParams({
      ...(currentPage && { page: currentPage.toString() }),
      ...(pageSize && { pageSize: pageSize.toString() }),
      ...(beforeDate && { beforeDate: beforeDate.toISOString() }),
      ...(afterDate && { afterDate: afterDate.toISOString() }),
      ...(teamName && { teamName }),
    }).toString();

    const url = `http://localhost:8080/api/schedule?${queryParams}`;

    const response = yield call(request, url, {
      method: 'GET',
      credentials: 'include',
    });

    yield put(actions.fetchScheduleSuccess(response));
  } catch (error: any) {
    // console.log(error);
    if (error.response) {
      const errorBody = yield call([error.response, 'json']);
      yield put(actions.fetchScheduleFailure(errorBody.message));
    } else {
      yield put(actions.fetchScheduleFailure(error.message));
    }
  }
}

export function* betSaga() {
  yield takeLatest(actions.fetchSchedule.type, fetchScheduleSaga);
}
