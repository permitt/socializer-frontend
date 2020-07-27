import React from 'react';
import { call, put } from 'redux-saga/effects';
import FriendService from '../../services/FriendService';
import { newSuccess, newError } from '../actions/notificationActions';


export function* addFriend({ payload }) {
    try {
        const resp = yield call(FriendService.postFriend, payload);

        yield put(newSuccess('Friend added successfuly!'));
    } catch (error) {
        console.log(error);
        yield put(newError(error.response.data.detail));
    }
}