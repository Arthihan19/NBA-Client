import { call, put, takeLatest } from 'redux-saga/effects';
import { getBaseURL, request } from '../../../../utils/request';
import { leaderboardActions as actions } from '.';

const BASE_URL = getBaseURL();

function* fetchLeaderboardSaga(action) {
  try {
    const { currentPage, pageSize } = action.payload;

    const queryParams = new URLSearchParams({
      ...(currentPage && { page: currentPage.toString() }),
      ...(pageSize && { pageSize: pageSize.toString() }),
    }).toString();

    const url = `${BASE_URL}/api/bets/leaderboard?${queryParams}`;

    const response = yield call(request, url, {
      method: 'GET',
      credentials: 'include',
    });

    yield put(actions.fetchLeaderboardSuccess(response));
  } catch (error: any) {
    if (error.response) {
      const errorBody = yield call([error.response, 'json']);
      yield put(actions.fetchLeaderboardFailure(errorBody.message));
    } else {
      yield put(actions.fetchLeaderboardFailure(error.message));
    }
  }
}

export function* leaderboardSaga() {
  yield takeLatest(actions.fetchLeaderboardRequest.type, fetchLeaderboardSaga);
}
