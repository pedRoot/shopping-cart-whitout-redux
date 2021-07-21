import { useReducer } from "react"
import uuid from 'react-uuid';

import types from "../types/types";
import globalStore from "../store/globalStore";
import combineReducers from "../helper/combineReducers";
import productReduce from "../reducers/Product";
import cartReduce from "../reducers/Cart";

const Product = () => {
  const [productState, dispatch] = useReducer(combineReducers({
    products: productReduce,
    cart: cartReduce
  }), globalStore);

  const { products, cart, active } = productState;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {
          products && products.map(product => (
            <li key={product.id}>
              {product.title}
              <button onClick={() => dispatch(
                {
                  type: types.product.SHOW_IN_CART,
                  payload: product.id
                }
              )}>
                Show
              </button>
              <button onClick={() => dispatch(
                {
                  type: types.cart.ADD_TO_CART,
                  payload: product
                }
              )}>
                Add
              </button>
            </li>
          ))
        }
      </ul>

      <h2>Cars</h2>
      <ul>
        {
          cart && cart.map(product => (
            <li key={uuid()}>

              {product.title} - {product.quantity}

              <button onClick={() => dispatch(
                {
                  type: types.cart.REMOVE_ONE,
                  payload: product.id
                }
              )}>
                -
              </button>

              <button onClick={() => dispatch(
                {
                  type: types.cart.REMOVE_ALL,
                  payload: product.id
                }
              )}>
                Remove
              </button>
            </li>
          ))
        }

      </ul>

      <h2>Detail</h2>
      <ul>
        <li>
          <p>{active.title}</p>
        </li>
      </ul>


    </div>
  )
}

export default Product
