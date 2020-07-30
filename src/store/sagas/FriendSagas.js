import React from 'react';
import { call, put } from 'redux-saga/effects';
import FriendService from '../../services/FriendService';
import { newSuccess, newError } from '../actions/notificationActions';
import { setFriendsAction } from '../actions/friendActions';


export function* addFriend({ payload }) {
    try {
        const resp = yield call(FriendService.postFriend, payload);

        yield put(newSuccess('Friend added successfuly!'));
    } catch (error) {
        console.log(error);
        yield put(newError(error.response.data.detail));
    }
}

export function* getFriends({ payload }) {
    try {
        const resp = yield call(FriendService.getFriends);

        yield put(setFriendsAction(resp));
    } catch (error) {
        yield put(newError(error.response.data.detail));
    }
}

export function* deleteFriend({ payload }) {

    try {
        const response = yield call(FriendService.deleteFriend, payload);

        yield put(newSuccess('Friend deleted successfuly!'));
    } catch (error) {
        yield put(newError(error.response.data.detail));
    }
}

export function* putFriend({ payload }) {
    try {
        const response = yield call(FriendService.putFriend, payload);

        yield put(newSuccess('Changed successfuly'));
    } catch (error) {
        yield put(newError(error.response.data.detail));
    }
}