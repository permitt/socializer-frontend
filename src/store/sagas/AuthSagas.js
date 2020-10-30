import { call, put } from 'redux-saga/effects';
import authService from '../../services/AuthService';
import { authUser, authInstagramAction } from '../actions/authActions';
import { newError, newSuccess } from '../actions/notificationActions';

export function* login({ payload }) {
    try {
        const response = yield call(authService.login, payload);

        // ako budem dodavao podatke u jwt
        // const decoded = jwt_decode(response);
        yield put(newSuccess('Logged in successfuly'));
        yield put(authUser(true));
    } catch (error) {
        console.log(error)
        if (error.response !== undefined) {
            yield put(newError(error.response.data.detail));
        }
        else {
            yield put(newError('Couldn\'t connect to the server'));
        }

    }
}


export function* logout() {
    authService.destroySession();
    yield put(authUser(false));
    yield put(newSuccess('Logged out successfuly'));
}



export function* addInstagram({ payload }) {
    try {
        const response = yield call(authService.addInstagram, payload);
        yield put(newSuccess('Instagram account added!'));
        yield put(authInstagramAction(payload.username));
    } catch (error) {
        yield put(newError(error.response.data.detail));
    }
}