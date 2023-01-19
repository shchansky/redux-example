import { createSlice } from "@reduxjs/toolkit";

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

type InitialState = { todos: TodoItem[] };

const initialState: InitialState = { todos: [] };

export const todoSlice = createSlice({
  name: "todos",

  initialState,

  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },

    reboveTodo(state, action) {},

    toggleTodo(state, action) {},
  },
});
