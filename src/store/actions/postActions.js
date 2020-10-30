import { GET_POSTS, DELETE_POST, SET_POSTS } from "./actionTypes";

export const getPostsAction = payload => ({
    type: GET_POSTS,
    payload
});

export const setPostsAction = payload => ({
    type: SET_POSTS,
    payload
})

export const deletePostAction = payload => ({
    type: DELETE_POST,
    payload
});