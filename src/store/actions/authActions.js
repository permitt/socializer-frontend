import { LOGIN, LOGOUT, AUTH_USER, ADD_INSTAGRAM, AUTH_INSTAGRAM, CHANGE_PASSWORD, DELETE_INSTAGRAM} from './actionTypes';

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

export const authInstagramAction = payload => ({
    type: AUTH_INSTAGRAM,
    payload
})


export const addInstagramAction = payload => ({
    type: ADD_INSTAGRAM,
    payload
})


export const deleteInstagramAction = payload => ({
    type: DELETE_INSTAGRAM,
    payload
})