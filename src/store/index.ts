import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo-slice";

export const store = configureStore({
  reducer: {
    tasks: todoReducer,
  },
});


export default store

export type RootSate= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch