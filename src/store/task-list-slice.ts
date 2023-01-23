import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export type InitialState = { list: Task[] };

const initialState: InitialState = {
  list: [
    {
      id: new Date().toISOString(),
      text: "Привет",
      completed: false,
    },
  ],
};

export const taskListSlice = createSlice({
  name: "taskList",

  initialState,

  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      console.log("state", state);
      console.log("action", action);

      state.list.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },

    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((el) => el.id !== action.payload);
    },

    toggleTodoCompleet(state, action: PayloadAction<string>) {
      const toggleTodo = state.list.find((todo) => todo.id === action.payload);

      if (toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodoCompleet } =
  taskListSlice.actions;

export default taskListSlice.reducer;
