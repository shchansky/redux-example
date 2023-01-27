import { configureStore } from "@reduxjs/toolkit";
import syncVersionReducer from "./sync-version-slice";
import asyncVersionReducer from "./async-version-slice";

export const store = configureStore({
  reducer: {
    syncVersion: syncVersionReducer,
    asyncVersion: asyncVersionReducer,
  },
});

export default store;

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
