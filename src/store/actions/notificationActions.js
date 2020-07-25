import React from 'react';
import { ERROR, SUCCESS } from "./actionTypes"

export const newError = payload => {
    return {
        type: ERROR,
        payload
    }
}
export const newSuccess = payload => ({
    type: SUCCESS,
    payload
})
