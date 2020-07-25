import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN } from '../actions/actionTypes';
import { login } from './AuthSagas';


export default function* rootSaga() {
    yield all([
        takeLatest(LOGIN, login),
    ])
}