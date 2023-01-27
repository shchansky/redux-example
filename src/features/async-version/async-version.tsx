import React from "react";

import { TaskList } from "./task-list";
import { InputField } from "./input-filed";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchTodos, addNewTodo } from "store/async-version-slice";

export const AsyncVersion = () => {
  const [text, setText] = React.useState<string>("");

  const { loading, error } = useAppSelector((state) => state.asyncVersion);

  const dispatch = useAppDispatch();

  const addtask = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText("");
    }
  };

  const handleSetText = React.useCallback((value: string) => {
    setText(value);
  }, []);

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <div>
        <InputField
          value={text}
          handleSubmit={addtask}
          setValue={handleSetText}
        />
      </div>

      {loading && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TaskList />
    </div>
  );
};
