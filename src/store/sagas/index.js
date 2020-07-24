import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN } from '../actions/actionTypes';


export default function* rootSaga() {
    yield all([
        takeLatest(LOGIN, () => { }),
    ])
}