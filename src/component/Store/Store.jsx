import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/Slice";
import CartReducer from "../Slice/CartSlice";
import FilterReducer from "../Slice/FilterSlice";

const store = configureStore ({
    reducer: {
        counter: counterReducer,
        cart: CartReducer,
        filter: FilterReducer,
    },
});
export default store;