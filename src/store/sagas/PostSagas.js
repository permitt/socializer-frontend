import { newError } from "../actions/notificationActions";
import { call, put } from 'redux-saga/effects';
import postService from "../../services/PostService";
import { setPostsAction } from '../actions/postActions';
import { DASHBOARD } from "../../assets/routes";
import { push } from "connected-react-router";

export function* getPosts({ payload }) {

    try {
        const response = yield call(postService.getPosts, payload);

        yield put(setPostsAction(response));

    } catch (error) {
        yield put(newError(error.response.data.detail));
        //yield put(push(DASHBOARD));
    }
}