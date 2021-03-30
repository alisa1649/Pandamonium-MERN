import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer'
import EntitiesReducer from './entities_reducer';
import PostsReducer from './posts_reducer'
import ParentPostsReducer from './parent_posts_reducer'

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  parent_posts: ParentPostsReducer,
  errors: ErrorsReducer,
});

export default RootReducer;