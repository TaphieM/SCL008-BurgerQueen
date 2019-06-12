import { addItems } from '../actions/actionTypes';

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
        order: state.order.concat(action.item),
      };
    default: return state;
  }
};
