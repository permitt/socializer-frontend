import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import PostReducer from './PostReducer';
import AuthReducer from './AuthReducer';
import NotificationReducer from './NotificationReducer';

export default history =>
    combineReducers({
        auth: AuthReducer,
        error: NotificationReducer,
        post: PostReducer,
        router: connectRouter(history),
    });
