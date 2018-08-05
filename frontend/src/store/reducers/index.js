import { combineReducers } from 'redux';
import usersList from './usersList';
import userRoadmap from './userRoadmap';

export default combineReducers({
  usersList,
  userRoadmap
});
