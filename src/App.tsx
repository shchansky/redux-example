import React from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState<string[]>([]);
  const [text, setText] = React.useState<string>("");

  const handleAddTodo = React.useCallback(() => {
    if (text.trim().length) {
      setTodos([...todos, text]);
      setText("");
    }
  }, [text, todos]);

  const handleSetText = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setText(ev.target.value);
    },
    []
  );

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={handleSetText} />
        <button onClick={handleAddTodo}>setTodos</button>
      </div>
      <hr />
      <div>
        {todos.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
