import React from 'react';
import { ERROR } from '../actions/actionTypes';


const initialState = {
    message: '',
    type: null
}

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case ERROR:
            return { message: action.payload }
        default:
            return state;
    }
}