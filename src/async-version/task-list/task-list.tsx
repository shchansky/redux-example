import { useAppSelector } from "hooks";
import { Task } from "../task/task";
import { useSelector } from "react-redux";

export const TaskList = () => {
  const todos = useAppSelector((state) => state.asyncVersion.list);
  // const todos = useSelector((state) => state.asyncVersion);

  return (
    <ul>
      {todos.map((todo) => (
        <Task key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
