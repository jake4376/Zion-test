import { all, fork } from 'redux-saga/effects';

import UsersSaga from './users';
import PhotosSaga from './photos';

export default function* saga () {
    yield all ([
        fork(UsersSaga),
        fork(PhotosSaga)
    ]);
}