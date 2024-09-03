import authReducer from './AuthReducer';
// Import All reducers here and combined into AppReducer.
import {combineReducers} from 'redux';
import appLoader from './AppLoader';

// Combine the Reducers
const appReducer = combineReducers({
  auth: authReducer,
  appLoader: appLoader,
});

// Define Root Reducer
const rootReducer = (state: any, action: any) => {
  if (action.type == 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
