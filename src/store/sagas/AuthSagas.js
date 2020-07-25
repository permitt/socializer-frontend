import { call, put } from 'redux-saga/effects';
import authService from '../../services/AuthService';
import { loggedInAction } from '../actions/authActions';

export function* login({ payload }) {
    try {
        const response = yield call(authService.login, payload);

        // ako budem dodavao podatke u jwt
        // const decoded = jwt_decode(response);
        yield put(loggedInAction(true));
    } catch (error) {
        // ispod cemo da dispatchujemo akciju za dodavanje greske koju hvata ErrorReducer i prikazuje komponenta
        //yield put();
    }
}
