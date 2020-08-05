import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dataReducer from "./reducers/dataReducer";

const initialState = {
  toDos: [
    { body: "take trash", id: 1 },
    { body: "walk dog", id: 2 },
  ],
};

const middleware = [thunk];

const reducers = combineReducers({
  data: dataReducer,
});

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
