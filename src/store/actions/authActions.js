import { LOGIN, LOGGED_IN } from './actionTypes';

export const loginAction = payload => {
    return {
        type: LOGIN,
        payload
    }
}

export const loggedInAction = () => {
    return {
        type: LOGGED_IN
    }
}