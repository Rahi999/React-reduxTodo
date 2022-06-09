import React from "react"

import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from "./action.types";

export const todoReducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...payload,
            id: state.todos.length
          },
        ],
      };
    }
    case COMPLETE_TODO: {
      let newTodos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          todo.completed = true;
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    }
    case DELETE_TODO: {
      todos.filter((todo) => todo !== value)
      return { ...state, todos: newTodos };
        }
    case UPDATE_TODO: {
      let newTodos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return payload;
        } else return todo;
      });
      return { ...state, todos: newTodos}
    }
    default: {
      return state;
    }
  }
};
