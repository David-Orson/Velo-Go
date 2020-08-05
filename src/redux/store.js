import { createStore, applyMiddleware, compose } from "redux";
import { v4 as uuid } from "uuid";

import dataReducer from "./reducers/dataReducer";

const initialState = {
  toDos: [
    {
      id: uuid(),
      body: "take out trash",
    },
    {
      id: uuid(),
      body: "walk dog",
    },
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  dataReducer,
  initialState,
  composeEnhancers(applyMiddleware())
);

export default store;
