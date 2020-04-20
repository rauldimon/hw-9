import React from "react";
import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux"
import createSagaMiddleware from "redux-saga";
import "./App.css";
import rootReducers from "./store/rootReducer";
import rootSaga from "./store/rootSaga";
import Game from "./components/Game";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Game />
      </div>
    </Provider>
  );
}

export default App;
