import { LOGIN, LOGOUT, AUTH_USER, ADD_INSTAGRAM, AUTH_INSTAGRAM, CHANGE_PASSWORD } from './actionTypes';

export const loginAction = payload => {
    return {
        type: LOGIN,
        payload
    }
};

export const changePassword = payload => ({
    type: CHANGE_PASSWORD,
    payload
});

export const logoutAction = () => ({
    type: LOGOUT
});

export const authUser = (payload) => {
    return {
        type: AUTH_USER,
        payload
    }
};

export const authInstagramAction = username => ({
    type: AUTH_INSTAGRAM,
    payload: username
})

export const addInstagramAction = payload => ({
    type: ADD_INSTAGRAM,
    payload
})