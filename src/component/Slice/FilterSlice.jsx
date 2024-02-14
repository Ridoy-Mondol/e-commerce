import { createSlice } from '@reduxjs/toolkit'

const FilterSlice = createSlice ({
    name : 'filter',
    initialState : {
        category : null,
        rating : null,
        price: { minprice: 0, maxprice: 1000 },
    },
    reducers : {
        setCatagory : (state,action) => {
            state.category = action.payload;
        },
        initialCategory : (state) => {
            state.category = null;
        },
        setRating : (state,action) => {
            state.rating = action.payload;
        },
        initialRating : (state) => {
            state.rating = null;
        },
        setPrice : (state,action) => {
            state.price = action.payload;
        },
        clearFilter : (state,action) => {
            state.category = null;
            state.rating = null;
            state.price = {
                minprice: 0,
                maxprice: 1000
            }
        }
    }
})
export const {setCatagory, initialCategory, setRating, initialRating, setPrice, clearFilter} = FilterSlice.actions;
export default FilterSlice.reducer;