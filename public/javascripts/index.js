import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store/index";

import AppContainer from "./containers/App";

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
