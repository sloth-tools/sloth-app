import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import {
  reducer as stepsReducer,
  initialState as stepsInitialState
} from './steps';

import {
  reducer as rolesReducer,
  initialState as rolesInitialState
} from './roles';

import {
  reducer as packagesReducer,
  initialState as packagesInitialState
} from './packages';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
  steps: stepsReducer,
  roles: rolesReducer,
  packages: packagesReducer
});

const store = createStore(
  combinedReducers,
  {
    steps: stepsInitialState,
    roles: rolesInitialState,
    packages: packagesInitialState
  },
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
