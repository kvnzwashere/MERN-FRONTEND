// reducer.js
import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  homeReducer,
  globalReducer,
});

export default rootReducer;
