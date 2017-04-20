import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import {
  reducer as stepsReducer,
  initialState as stepsInitialState,
} from './steps';

import {
  reducer as rolesReducer,
  initialState as rolesInitialState,
} from './roles';

import {
  reducer as packagesReducer,
  initialState as packagesInitialState,
} from './packages';

import {
  reducer as playbooksReducer,
  initialState as playbooksInitialState,
} from './playbooks';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
  steps: stepsReducer,
  roles: rolesReducer,
  packages: packagesReducer,
  playbooks: playbooksReducer,
});

const store = createStore(
  combinedReducers,
  {
    steps: stepsInitialState,
    roles: rolesInitialState,
    packages: packagesInitialState,
    playbooks: playbooksInitialState,
  },
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
