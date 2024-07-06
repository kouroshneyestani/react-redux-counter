import { useSelector, useDispatch } from "react-redux"; // Import useSelector to read state and useDispatch to send actions

import {
    increment,
    decrement,
    incrementByAmount,
} from "../../features/counter/counterSlice"; // Import actions for counter state

const Counter = () => {
    const count = useSelector((state) => state.counter.value); // Get the counter value from the Redux store
    const dispatch = useDispatch(); // Get the dispatch function to send actions

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>
                Increment by 5
            </button>
        </div>
    );
};

export default Counter;
