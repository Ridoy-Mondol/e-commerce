// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../Slice/Slice";
// import CartReducer from "../Slice/CartSlice";
// import FilterReducer from "../Slice/FilterSlice";
// import LocalStorageReducer from "../Slice/LocalStorage";

// const store = configureStore ({
//     reducer: {
//         counter: counterReducer,
//         cart: CartReducer,
//         filter: FilterReducer,
//         localstorage: LocalStorageReducer,
//     },
// });
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/Slice";
import CartReducer from "../Slice/CartSlice";
import FilterReducer from "../Slice/FilterSlice";
import LocalStorageReducer from "../Slice/LocalStorage";

const store = configureStore ({
    reducer: {
        counter: counterReducer,
        cart: CartReducer,
        filter: FilterReducer,
        localstorage: LocalStorageReducer,
    },
});

export default store;
