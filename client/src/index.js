import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import reducers from "./redux/reducers";
import mySaga from "./redux/sagas";

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
