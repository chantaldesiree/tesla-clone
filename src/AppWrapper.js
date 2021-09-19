import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./app/store";
import App from "./App";

const AppWrapper = () => (
  <Provider store={configureStore}>
    <App />
  </Provider>
);

export default AppWrapper;
