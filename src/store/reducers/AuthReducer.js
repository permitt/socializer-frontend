import { AUTH_USER } from "../actions/actionTypes"
import authService from "../../services/AuthService"

const initialState = {
    isAuthenticated: authService.isAuthenticated(),
    instagramUser: authService.getInstagramUser(),
    instagramPassword: authService.getInstagramPassword(),

}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, isAuthenticated: action.payload }
        default:
            return state
    }
}