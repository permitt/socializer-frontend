import { call, put } from 'redux-saga/effects';
import authService from '../../services/AuthService';
import { loggedInAction } from '../actions/authActions';
import { newError, newSuccess } from '../actions/notificationActions';

export function* login({ payload }) {
    try {
        const response = yield call(authService.login, payload);

        // ako budem dodavao podatke u jwt
        // const decoded = jwt_decode(response);
        yield put(newSuccess('Logged in successfuly'));
        yield put(loggedInAction(true));
    } catch (error) {
        yield put(newError(error.response.data.detail));
        // ispod cemo da dispatchujemo akciju za dodavanje greske koju hvata ErrorReducer i prikazuje komponenta
        //yield put();
    }
}
