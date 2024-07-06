import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store"; // Import the Redux store which holds the application state
import { Provider } from "react-redux"; // Import Provider to integrate Redux with React
import App from "./App";

// Create a root element for rendering the React component tree
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in Provider to give access to the Redux store to the entire app
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
