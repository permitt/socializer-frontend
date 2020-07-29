import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGOUT, ADD_INSTAGRAM, POST_FRIEND, GET_FRIENDS, DELETE_FRIEND, GET_POSTS } from '../actions/actionTypes';
import { login, logout, addInstagram } from './AuthSagas';
import { addFriend, getFriends, deleteFriend } from './FriendSagas';
import { getPosts } from './PostSagas';


export default function* rootSaga() {
    yield all([
        takeLatest(LOGIN, login),
        takeLatest(LOGOUT, logout),
        takeLatest(ADD_INSTAGRAM, addInstagram),
        takeLatest(POST_FRIEND, addFriend),
        takeLatest(GET_FRIENDS, getFriends),
        takeLatest(DELETE_FRIEND, deleteFriend),
        takeLatest(GET_POSTS, getPosts),

    ])
}