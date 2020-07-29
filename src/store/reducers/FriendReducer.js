import { SET_FRIENDS, DELETE_FRIEND } from '../actions/actionTypes';


const initialState = {
    following: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return { ...state, following: action.payload }
        case DELETE_FRIEND:
            return { ...state, following: state.following.filter(friend => friend.username !== action.payload) }
        default:
            return state
    }
}