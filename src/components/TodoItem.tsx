import React from "react";

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

type Props = TodoItem & {
  handleToggleTodoCompleet: (id: string) => void;
  handleRemoveTodo: (id: string) => void;
};

export const TodoItem = (props: Props) => {
  const { id, text, completed, handleToggleTodoCompleet, handleRemoveTodo } =
    props;

  return (
    <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleToggleTodoCompleet(id)}
      />
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </span>
      <button
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => handleRemoveTodo(id)}
      >
        &times;
      </button>
    </li>
  );
};
