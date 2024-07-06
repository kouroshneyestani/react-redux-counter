import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"; // Import the counter reducer

// Create the Redux store with reducers for counter
const store = configureStore({
    reducer: {
        counter: counterReducer, // Register the counter reducer under the 'counter' key in the store
    },
});

export default store;