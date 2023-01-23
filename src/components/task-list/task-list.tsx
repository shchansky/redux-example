import { useAppSelector } from "../../hooks";
import { Task } from "../task/task";

export const TaskList = () => {
  const todos = useAppSelector((state) => state.tasks.list);

  return (
    <ul>
      {todos.map((todo) => (
        <Task key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
