import React from "react";
import { TodoList, InputField } from "./components";
import { useAppDispatch } from "./hooks";
import { handleAddTodo } from "./store/todo-slice";

function App() {
  const [text, setText] = React.useState<string>("");

  const dispatch = useAppDispatch();

  const addtask = () => {
    if (text.trim().length) {
      dispatch(handleAddTodo(text));
      setText("");
    }
  };

  const handleSetText = React.useCallback((value: string) => {
    setText(value);
  }, []);

  return (
    <div>
      <div>
        <InputField
          value={text}
          handleSubmit={addtask}
          setValue={handleSetText}
        />
      </div>
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
