import { ADD_TODO, DELETE_TODO } from "../types";
import { v4 as uuid } from "uuid";

const initialState = {
  toDos: [
    {
      id: uuid(),
      name: "take out trash",
      completed: false,
    },
    {
      id: uuid(),
      name: "walk dog",
      completed: false,
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
