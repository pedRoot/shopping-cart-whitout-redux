import { cart } from "./cart";
import { active, products } from "./product";

const globalStore = {
  products,
  cart,
  active,
};

export default globalStore;