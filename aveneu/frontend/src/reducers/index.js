import { combineReducers } from 'redux';
import authReducer from './authReducer';
import appStatus from './appStatus';

export default combineReducers({
  auth: authReducer,
    appStatus: appStatus
});
