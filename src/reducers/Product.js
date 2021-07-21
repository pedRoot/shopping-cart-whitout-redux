import types from "../types/types";

const product = (state, action) => {
  switch (action.type) {
    case types.product.SHOW_IN_CART: {
      console.log('state: ', state);
      return {
        ...state,
        active: state.products.find(product => product.id === action.payload)
      };
    }

    default:
      return state;
  }
}

export default product;