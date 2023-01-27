import React from "react";
import * as Features from "./features";
function App() {
  return (
    <>
      <Features.SyncVersion /> <hr />
      <h3>Async version</h3>
      <Features.AsyncVersion />
    </>
  );
}

export default App;
