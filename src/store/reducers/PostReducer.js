import { GET_POSTS, DELETE_POST } from '../actions/actionTypes';


const initialState = {
    posts: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(post => post.ID !== action.payload) }
        default:
            return state
    }
}