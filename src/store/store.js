import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./cartSlice";
import productReducer, { fetchProducts } from "./productSlice";

//configure and assign reducers(register)
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

//first lost the data that has stored
store.dispatch(getTotals());
store.dispatch(fetchProducts());
export default store;
