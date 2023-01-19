import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo-slice";

export const Store = configureStore({ reducer: { todos: todoReducer } });
