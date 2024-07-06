import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the counter
const initialState = {
    value: 0, // Initial counter value
};

// Create a slice for the counter feature
const counterSlice = createSlice({
    name: "counter", // The name of the slice
    initialState, // Set the initial state
    reducers: {
        increment: (state) => {
            state.value += 1; // Increase the counter value by 1
        },
        decrement: (state) => {
            state.value -= 1; // Decrease the counter value by 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload; // Increase the counter value by a specific amount
        },
    },
});

// Export the action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer for configuring the store
export default counterSlice.reducer;
