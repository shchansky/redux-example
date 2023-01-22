import React from "react";
import { TodoList, InputField } from "./components";
import { useDispatch } from "react-redux";
import {
  handleAddTodo,
  handleRemoveTodo,
  handleToggleTodoCompleet,
} from "./store/todo-slice";
import "./App.css";

type todoItem = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const [text, setText] = React.useState<string>("");

  const dispatch = useDispatch();

  const addtask = () => dispatch(handleAddTodo(text));

  const handleRemoveTodo = React.useCallback((id: string) => {}, []);

  const handleToggleTodoCompleet = React.useCallback((id: string) => {}, []);

  const handleSetText = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setText(ev.target.value);
    },
    []
  );

  return (
    <div>
      <div>
        <InputField
          text={text}
          handleSubmit={addtask}
          handleInput={handleSetText}
        />
      
      </div>

      <hr />
      <TodoList />
    </div>
  );

  // return <div>zsdsdcsdc</div>;
}

export default App;
