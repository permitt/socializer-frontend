import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import PostReducer from './PostReducer';
import AuthReducer from './AuthReducer';

export default history =>
    combineReducers({
        auth: AuthReducer,
        post: PostReducer,
        router: connectRouter(history),
    });
