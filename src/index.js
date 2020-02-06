import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import configureStore from "./store/configureStore";
import "./styles/index.css";

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById("root"));
