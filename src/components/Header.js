import { useReducer } from "react";

import types from "../types/types";
import globalStore from "../store/globalStore";
import combineReducers from "../helper/combineReducers";
import cartReduce from "../reducers/Cart";

const Header = () => {
  const [productState, dispatch] = useReducer(combineReducers({
    cart: cartReduce
  }), globalStore);

  return (
    <div>
      <button onClick={() => dispatch(
        {
          type: types.cart.EMPTY_CART,
          payload: productState
        }
      )}>
        Add
      </button>
      <hr />
    </div>
  )
}

export default Header
