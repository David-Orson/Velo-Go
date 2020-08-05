import { ADD_TODO } from "../types";

export const addToDo = (toDo) => ({
  type: ADD_TODO,
  payload: toDo,
});

export const deleteToDo = (todoId) => ({
  type: "DELETE_TODO",
  payload: todoId,
});
