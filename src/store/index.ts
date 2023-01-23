import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./task-list-slice";

export const store = configureStore({
  reducer: {
    taskList: todoReducer,
  },
});

export default store;

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
