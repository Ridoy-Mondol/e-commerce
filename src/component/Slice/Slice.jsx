import { createSlice } from '@reduxjs/toolkit';

const initialState = Object.fromEntries(
    Array.from({ length: 20 }, (_, i) => [`value${i + 1}`, 1])
);

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return initialState; 
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
};

const CounterSlice = createSlice({
    name: 'counter',
    initialState: loadStateFromLocalStorage(),
    reducers: {
        increment: (state, action) => {
            const key = `value${action.payload}`;
            if (state[key] < 5) {
                state[key] += 1;
                saveStateToLocalStorage(state); 
            }
        },
        decrement: (state, action) => {
            const key = `value${action.payload}`;
            if (state[key] > 1) {
                state[key] -= 1;
                saveStateToLocalStorage(state); 
            }
        },
    },
});

export const { increment, decrement } = CounterSlice.actions;
const createCounterSelector = (counterIndex) => (state) =>
state.counter[`value${counterIndex}`];

export const selectCounter1 = createCounterSelector(1);
export const selectCounter2 = createCounterSelector(2);
export const selectCounter3 = (state) => state.counter.value3;
export const selectCounter4 = (state) => state.counter.value4;
export const selectCounter5 = (state) => state.counter.value5;
export const selectCounter6 = (state) => state.counter.value6;
export const selectCounter7 = (state) => state.counter.value7;
export const selectCounter8 = (state) => state.counter.value8;
export const selectCounter9 = (state) => state.counter.value9;
export const selectCounter10 = (state) => state.counter.value10;
export const selectCounter11 = (state) => state.counter.value11;
export const selectCounter12 = (state) => state.counter.value12;
export const selectCounter13 = (state) => state.counter.value13;
export const selectCounter14 = (state) => state.counter.value14;
export const selectCounter15 = (state) => state.counter.value15;
export const selectCounter16 = (state) => state.counter.value16;
export const selectCounter17 = (state) => state.counter.value17;
export const selectCounter18 = (state) => state.counter.value18;
export const selectCounter19 = (state) => state.counter.value19;
export const selectCounter20 = (state) => state.counter.value20;

export default CounterSlice.reducer;



