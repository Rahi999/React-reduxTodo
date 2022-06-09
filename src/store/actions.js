import {
  ADD_TODO,
  COMPLETE_TODO,
  UPDATE_TODO,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  DELETE_TODO
} from "./action.types";

export const counterInc = () => ({ type: INCREMENT_COUNTER });
export const counterDec = () => ({ type: DECREMENT_COUNTER });

export const addTodo = (payload) => ({ type: ADD_TODO });
export const completeTodo = (id) => ({ type: COMPLETE_TODO });
export const updateTodo = (payload) => ({ type: UPDATE_TODO });
export const deleteTodo = (id) => ({ type: DELETE_TODO });
