import { takeLatest, call, put } from 'redux-saga/effects';
import { request } from 'utils/request';
import { betActions as actions } from './index';
import { BetSlipItem } from './types';

function* fetchScheduleSaga(action) {
  try {
    const { currentPage, pageSize, beforeDate, afterDate, teamName } =
      action.payload;

    const queryParams = new URLSearchParams({
      ...(currentPage && { page: currentPage.toString() }),
      ...(pageSize && { pageSize: pageSize.toString() }),
      ...(beforeDate && { beforeDate: beforeDate }),
      ...(afterDate && { afterDate: afterDate }),
      ...(teamName && { teamName }),
    }).toString();

    const url = `http://localhost:8080/api/schedule?${queryParams}`;

    const response = yield call(request, url, {
      method: 'GET',
      credentials: 'include',
    });

    yield put(actions.fetchScheduleSuccess(response));
  } catch (error: any) {
    if (error.response) {
      const errorBody = yield call([error.response, 'json']);
      yield put(actions.fetchScheduleFailure(errorBody.message));
    } else {
      yield put(actions.fetchScheduleFailure(error.message));
    }
  }
}

function* postBetSlip(action) {
  try {
    const url = `http://localhost:8080/api/bets`;

    const response = yield call(request, url, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        action.payload.map(bet => ({
          gameId: bet.id,
          teamId: bet.betTeamId,
          betAmount: bet.betAmount,
          odds:
            bet.betTeamId === bet.teamOneId ? bet.teamOneOdds : bet.teamTwoOdds,
        })),
      ),
    });

    yield put(actions.sendBetSlipRequestSuccess(response));
  } catch (error: any) {
    if (error.response) {
      const errorParsed = yield call([error.response, 'json']);
      yield put(actions.sendBetSlipRequestFailure(errorParsed.message));
    } else {
      yield put(actions.sendBetSlipRequestFailure(error.message));
    }
  }
}

export function* betSaga() {
  yield takeLatest(actions.fetchSchedule.type, fetchScheduleSaga);
  yield takeLatest(actions.sendBetSlipRequest.type, postBetSlip);
}
