import React from 'react';
import { ERROR } from "./actionTypes"

export const newError = payload => {
    return {
        type: ERROR,
        payload
    }
}