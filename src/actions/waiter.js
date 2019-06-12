// Redux actions are nothing more than JavaScript objects
// Every action needs a type property for describing how the state should change.
// Archivo con las acciones referentes a la cocina
// Terminar pedido

import { addItems, deleteItems } from './actionTypes';


export const addItemtoOrder = dispatch => (item) => {
  dispatch({
    type: addItems,
    item,
  });
};

export const deleteItemtoOrder = dispatch => () => {
  dispatch({
    type: deleteItems,
  });
};
