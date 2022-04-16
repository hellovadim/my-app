import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "../reducers/rootReducer";

export const store = createStore(rootReducer);
