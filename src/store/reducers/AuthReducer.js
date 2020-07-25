import { LOGGED_IN } from "../actions/actionTypes"
import authService from "../../services/AuthService"

const initialState = {
    isAuthenticated: authService.isAuthenticated(),
    instagramUser: null,
    instagramPassword: null,

}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:
            return { ...state, isAuthenticated: true }
        default:
            return state
    }
}