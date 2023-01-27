import React from "react";

import { TaskList } from "./task-list";
import { InputField } from "./input-filed";
import { useAppDispatch } from "hooks";
import { fetchTodos } from "store/async-version-slice";

export const SyncVersion = () => {
  const [text, setText] = React.useState<string>("");

  const dispatch = useAppDispatch();

  const addtask = () => {
    if (text.trim().length) {
      // dispatch(addTodo(text));
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
      <hr />
      <TaskList />
    </div>
  );
};
