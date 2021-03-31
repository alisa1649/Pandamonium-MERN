import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer'
import EntitiesReducer from './entities_reducer';
import PostsReducer from './posts_reducer'
import ParentPostsReducer from './parent_posts_reducer'
import ThreadReducer from "./thread_reducer";
import uiReducer from './ui_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  parent_posts: ParentPostsReducer,
  thread: ThreadReducer,
  errors: ErrorsReducer,
  ui: uiReducer,
});

export default RootReducer;