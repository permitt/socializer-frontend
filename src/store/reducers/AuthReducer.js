import { AUTH_USER, AUTH_INSTAGRAM, DELETE_INSTAGRAM } from "../actions/actionTypes"
import authService from "../../services/AuthService"

const initialState = {
    isAuthenticated: authService.isAuthenticated(),
    instagramUser: authService.getInstagramUser(),
    instagramPicture: authService.getInstagramPicture(),
    email: authService.getEmail()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, isAuthenticated: action.payload, instagramUser: authService.getInstagramUser(), instagramPicture: authService.getInstagramPicture(), email: authService.getEmail() }
        case AUTH_INSTAGRAM:
            return { ...state, instagramUser: action.payload }
        case DELETE_INSTAGRAM:
            return {...state, instagramUser: null}
        default:
            return state
    }
}