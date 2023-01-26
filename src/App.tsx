import React from "react";
import { SyncVersion } from "./sync-version";
import { useAppDispatch } from "./hooks";
import { addTodo } from "./store/task-list-slice";

function App() {
  return <SyncVersion />;
}

export default App;
