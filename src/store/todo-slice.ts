import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

export type InitialState = { list: TodoItem[] };

const initialState: InitialState = {
  list: [
    {
      id: new Date().toISOString(),
      text: "Привет",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "tasks",

  initialState,

  reducers: {
    handleAddTodo(state, action: PayloadAction<string>) {
      console.log("state", state);
      console.log("action", action);

      state.list.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },

    handleRemoveTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((el) => el.id !== action.payload);
    },

    handleToggleTodoCompleet(state, action: PayloadAction<string>) {
      const toggleTodo = state.list.find((todo) => todo.id === action.payload);

      if (toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed;
      }
    },
  },
});

export const { handleAddTodo, handleRemoveTodo, handleToggleTodoCompleet } =
  todoSlice.actions;

export default todoSlice.reducer;