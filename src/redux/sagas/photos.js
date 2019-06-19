import { put, takeEvery, call, select } from 'redux-saga/effects';

import { getPhotos } from 'api';

import { actionTypes } from '../actions/photos';
import { actionTypes as userActionTypes } from '../actions/users';

import { SelectedUserName, PhotoOrder, PhotoPage, TotalPhoto } from '../selectors';

function* Photos(action) {
  const username = yield select(SelectedUserName);
  const orderBy = yield select(PhotoOrder);
  const page = yield select(PhotoPage);
  const totalPhoto = yield select(TotalPhoto);
  if (Math.ceil(totalPhoto / 30) > page) {
    try {
      const result = yield call(getPhotos, username, page + 1, 30, orderBy);
      yield put({ type: actionTypes.PHOTOS_SUCCESS, payload: { photos: result, current_page: page + 1 } });
    } catch (err) {
      yield put({ type: actionTypes.PHOTOS_FAILURE, payload: err });
    }
  } else {
    yield put({ type: actionTypes.PHOTOS_END })
  }
}

export default function* PhotosSaga() {
  yield takeEvery(actionTypes.PHOTOS, Photos);
  yield takeEvery(actionTypes.PHOTOS_UPDATE, Photos);
  yield takeEvery(userActionTypes.USERS_SELECTED, Photos);
}
