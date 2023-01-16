import React from "react";
import "./App.css";

type todoItem = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = React.useState<todoItem[]>([]);
  const [text, setText] = React.useState<string>("");

  const handleAddTodo = React.useCallback(() => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
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
      <ul>
        {todos.map((el) => (
          <li key={el.id}>
            <input type="checkbox" />
            <span>{el.text}</span>
            <span style={{ color: "red" }}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
