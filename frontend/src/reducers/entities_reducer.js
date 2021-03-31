import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import ParentPostsReducer from './parent_posts_reducer';
import ThreadReducer from './thread_reducer';

export default combineReducers({
    users: UsersReducer,
    parent_posts: ParentPostsReducer,
    thread: ThreadReducer,
})