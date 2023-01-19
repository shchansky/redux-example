import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  todos: string[];
};

const initialState: InitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});
