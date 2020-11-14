import { AUTH_USER, AUTH_INSTAGRAM } from "../actions/actionTypes"
import authService from "../../services/AuthService"

const initialState = {
    isAuthenticated: authService.isAuthenticated(),
    instagramUser: authService.getInstagramUser(),
    email: authService.getEmail()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, isAuthenticated: action.payload, instagramUser: authService.getInstagramUser(), email: authService.getEmail() }
        case AUTH_INSTAGRAM:
            return { ...state, instagramUser: action.payload }
        default:
            return state
    }
}