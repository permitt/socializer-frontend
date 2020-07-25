import React from 'react';
import { ERROR, SUCCESS } from '../actions/actionTypes';


const initialState = {
    message: null,
    type: null
}

export default function NotificationReducer(state = initialState, action) {
    switch (action.type) {
        case ERROR:
            return { message: action.payload, type: ERROR }
        case SUCCESS:
            return { message: action.payload, type: SUCCESS }
        default:
            return state;
    }
}