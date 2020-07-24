import { LOGGED_IN } from "../actions/actionTypes"

const initialState = {
    isAuthenticated: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:
            return { ...state, isAuthenticated: true }
        default:
            return state
    }
}