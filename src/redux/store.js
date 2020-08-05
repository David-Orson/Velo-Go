import { createStore } from "redux";
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

const store = createStore(
  dataReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
