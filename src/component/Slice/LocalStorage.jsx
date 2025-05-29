import { createSlice } from "@reduxjs/toolkit";

const localStorageSlice = createSlice ({
    name : "localstorage",
    initialState : "",
    reducers : {
        storeInLocalStorage: (state,action) => {
            localStorage.setItem ("token", action.payload);

            return action.payload;
        }
    }
})

export const { storeInLocalStorage } = localStorageSlice.actions;
export default localStorageSlice.reducer;
