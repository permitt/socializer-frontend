import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import PostReducer from './PostReducer';
import AuthReducer from './AuthReducer';
import FriendReducer from './FriendReducer';
import NotificationReducer from './NotificationReducer';

export default history =>
    combineReducers({
        auth: AuthReducer,
        notification: NotificationReducer,
        post: PostReducer,
        friend: FriendReducer,
        router: connectRouter(history),
    });
