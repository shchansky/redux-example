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

  const handleRemoveTodo = React.useCallback(
    (id: string) => {
      const filterTodos = todos.filter((el) => el.id !== id);

      setTodos(filterTodos);
    },
    [todos]
  );

  const handleToggleTodoCompleet = React.useCallback(
    (id: string) => {
      const filterTodos = todos.map((el) => ({
        ...el,
        completed: id === el.id ? !el.completed : el.completed,
      }));

      setTodos([...filterTodos]);
    },
    [todos]
  );

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
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ display: "flex", gap: "8px", alignItems: "center" }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onClick={() => handleToggleTodoCompleet(todo.id)}
            />
            <span>{todo.text}</span>
            <button
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => handleRemoveTodo(todo.id)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
