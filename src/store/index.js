// Recuerda importar composeWithDevTools, para ver la consola de redux.
// También importar los reducer
// the state of the whole app lives inside the store

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import state from './initialState';

export default createStore(
  reducer,
  state,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
