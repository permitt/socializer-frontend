import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGOUT, ADD_INSTAGRAM } from '../actions/actionTypes';
import { login, logout, addInstagram } from './AuthSagas';


export default function* rootSaga() {
    yield all([
        takeLatest(LOGIN, login),
        takeLatest(LOGOUT, logout),
        takeLatest(ADD_INSTAGRAM, addInstagram),
    ])
}