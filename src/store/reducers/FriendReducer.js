import { SET_FRIENDS } from '../actions/actionTypes';


const initialState = {
    following: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return { ...state, following: action.payload }
        default:
            return state
    }
}