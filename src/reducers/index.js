import { combineReducers } from 'redux';
import postsReducer from './posts';
import users from './users';

export default combineReducers ({
    posts: postsReducer,
    users
});