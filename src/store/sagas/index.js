import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGOUT, ADD_INSTAGRAM, POST_FRIEND, PUT_FRIEND, GET_FRIENDS, DELETE_FRIEND, GET_POSTS, DELETE_POST } from '../actions/actionTypes';
import { login, logout, addInstagram } from './AuthSagas';
import { addFriend, getFriends, deleteFriend, putFriend } from './FriendSagas';
import { getPosts, deletePost } from './PostSagas';


export default function* rootSaga() {
    yield all([
        takeLatest(LOGIN, login),
        takeLatest(LOGOUT, logout),
        takeLatest(ADD_INSTAGRAM, addInstagram),
        takeLatest(POST_FRIEND, addFriend),
        takeLatest(PUT_FRIEND, putFriend),
        takeLatest(GET_FRIENDS, getFriends),
        takeLatest(DELETE_FRIEND, deleteFriend),
        takeLatest(GET_POSTS, getPosts),
        takeLatest(DELETE_POST, deletePost),

    ])
}