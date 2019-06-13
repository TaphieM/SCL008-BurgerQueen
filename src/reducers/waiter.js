import { addItems, deleteItems } from '../actions/actionTypes';

export default (
  state = {
    order: [],
  },
  action,
) => {
  switch (action.type) {
    case addItems:
      return {
        ...state,
        order: state.order.concat([action.item]),
      };
    case deleteItems:
      return {
        ...state,
        order: state.order.filter(item => item.name != [action.item.name])
      };
    default: return state;
  }
};
