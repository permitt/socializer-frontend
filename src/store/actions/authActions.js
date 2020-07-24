import { LOGIN } from './actionTypes';

export const login = values => {
    return {
        type: LOGIN,
        payload: values
    }
}
