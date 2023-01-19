import { createSlice } from "@reduxjs/toolkit";

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

type InitialState = { todos: TodoItem[] };

const initialState: InitialState = { todos: [] };

const todoSlice = createSlice({
  name: "todos",

  initialState,

  reducers: {
    handleAddTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },

    handleRemoveTodo(state, action) {},

    handleToggleTodoCompleet(state, action) {},
  },
});

export const { handleAddTodo, handleRemoveTodo, handleToggleTodoCompleet } =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;
