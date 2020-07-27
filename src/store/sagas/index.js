import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGOUT, ADD_INSTAGRAM, POST_FRIEND } from '../actions/actionTypes';
import { login, logout, addInstagram } from './AuthSagas';
import { addFriend } from './FriendSagas';


export default function* rootSaga() {
    yield all([
        takeLatest(LOGIN, login),
        takeLatest(LOGOUT, logout),
        takeLatest(ADD_INSTAGRAM, addInstagram),
        takeLatest(POST_FRIEND, addFriend),
    ])
}