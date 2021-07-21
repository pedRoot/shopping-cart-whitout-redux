import types from "../types/types";

const cart = (state, action) => {
  switch (action.type) {
      case types.cart.EMPTY_CART:
        console.log('reducer empty car: ', state);
      return {
        ...state,
        cart: null
      }

      case types.cart.REMOVE_ALL:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload)
      }

    case types.cart.ADD_TO_CART: {
      const newProduct = action.payload;
      const isProductInCart = state.cart.find(
        product => product.id === newProduct.id
      );

      return isProductInCart
        ? {
          ...state,
          cart: state.cart.map(
            product => product.id === newProduct.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        }
        : {
          ...state,
          cart: [
            ...state.cart,
            { ...action.payload, quantity: 1 }
          ]
        }
    }

    case types.cart.REMOVE_ONE:{
      console.log(state);
      const isProductEmpty = state.cart.find(
        product => product.id === action.payload && product.quantity === 1
      );

      return isProductEmpty
      ? {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload)
      }
      : {
        ...state,
        cart: state.cart.map(
          product => product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      }
    }

    default:
      return state;
  }
}

export default cart;
