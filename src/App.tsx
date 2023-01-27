import React from "react";
import { SyncVersion } from "./sync-version";
import { AsyncVersion } from "./async-version";
function App() {
  return (
    <>
      <SyncVersion /> <hr />
      <h3>Async version</h3>
      <AsyncVersion />
    </>
  );
}

export default App;
