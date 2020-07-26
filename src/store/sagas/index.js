import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGOUT } from '../actions/actionTypes';
import { login, logout } from './AuthSagas';


export default function* rootSaga() {
    yield all([
        takeLatest(LOGIN, login),
        takeLatest(LOGOUT, logout),
    ])
}