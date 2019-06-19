import { put, takeEvery, takeLatest, call, select } from 'redux-saga/effects';

import { searchUsers } from 'api';

import { actionTypes } from '../actions/users';
import { UserPage, UserSearchKey } from '../selectors';

function* Users(action) {
  const searchKey = yield select(UserSearchKey);
  if (searchKey !== '') {
    const page = yield select(UserPage);
    try {
      const result = yield call(searchUsers, searchKey, page + 1, 30);
      yield put({ type: actionTypes.USERS_SUCCESS, payload: {...result, current_page: page + 1} });
    } catch (err) {
      yield put({ type: actionTypes.USERS_FAILURE, payload: err });
    }
  } else {
    yield put({ type: actionTypes.USRES_END })
  }
}

export default function* UsersSaga() {
  yield takeEvery(actionTypes.USERS, Users);
  yield takeLatest(actionTypes.USERS_UPDATE, Users);
}