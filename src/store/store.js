import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import auth from './reducers/auth';

const rootReducer = combineReducers({
  auth: auth,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
