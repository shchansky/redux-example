import { useAppSelector } from "hooks";
import { Task } from "../task/task";
import { useSelector } from "react-redux";

export const TaskList = () => {
  const todos = useAppSelector((state) => state.syncVersion.list);

  return (
    <ul>
      {todos.map((todo) => (
        <Task key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
