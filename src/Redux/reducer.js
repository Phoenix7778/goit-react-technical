import { combineReducers } from 'redux';
import { usersReducer } from './userSlice';
import { followerReducer } from './followerSlice';

export const reducer = combineReducers({
  users: usersReducer,
  followerOf: followerReducer,
});
