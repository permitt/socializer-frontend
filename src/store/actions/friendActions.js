import { POST_FRIEND, GET_FRIENDS, SET_FRIENDS, DELETE_FRIEND } from './actionTypes';

export const addFriendAction = payload => ({
    type: POST_FRIEND,
    payload
});

export const getFriendsAction = payload => ({
    type: GET_FRIENDS
});

export const setFriendsAction = payload => ({
    type: SET_FRIENDS,
    payload
})

export const deleteFriendAction = payload => ({
    type: DELETE_FRIEND,
    payload
})