import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  try {
    const cartState = localStorage.getItem('cart');
    if (cartState === null) return [];
    return JSON.parse(cartState);
  } catch (err) {
    console.error('Error loading cart state from localStorage:', err);
    return [];
  }
};

const saveCartToLocalStorage = (cartState) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cartState));
  } catch (err) {
    console.error('Error saving cart state to localStorage:', err);
  }
};

const CartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromLocalStorage(),
  reducers: {
    add: (state, action) => {
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state);
    },
    remove: (state, action) => {
      const newState = state.filter(item => item.id !== action.payload);
      saveCartToLocalStorage(newState);
      return newState;
    },
    clear: (state) => {
      saveCartToLocalStorage([]);
      state.splice(0, state.length);
    },
  },
});

export const { add, remove, clear } = CartSlice.actions;
export const selectCart = (state) => state.cart;
export default CartSlice.reducer;

