import { GET_POSTS, DELETE_POST, SET_POSTS } from '../actions/actionTypes';


const initialState = {
    all: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            console.log(action)
            return { ...state, all: action.payload }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(post => post.ID !== action.payload) }
        default:
            return state
    }
}