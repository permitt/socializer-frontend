import { LOGIN, LOGOUT, AUTH_USER } from './actionTypes';

export const loginAction = payload => {
    return {
        type: LOGIN,
        payload
    }
};

export const logoutAction = () => ({
    type: LOGOUT
});

export const authUser = (payload) => {
    return {
        type: AUTH_USER,
        payload
    }
};