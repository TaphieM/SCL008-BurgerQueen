// Usar combine reducers para combinar todos los reducers creados, debemos importarlos a store
// reducers produce the state of your application.
// A reducer is just a JavaScript function. A reducer takes
// two parameters: the current state and an action

import { combineReducers } from 'redux';
// import kitchen from './kitchen';
import waiter from './waiter';

export default combineReducers({
  // kitchen,
  waiter,
});
