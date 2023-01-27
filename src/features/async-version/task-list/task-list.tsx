import { useAppSelector } from "hooks";
import { Task } from "../task/task";

export const TaskList = () => {
  const todos = useAppSelector((state) => state.asyncVersion.list);

  return (
    <ul>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          completed={todo.completed}
          id={todo.id}
          title={todo.title}
        />
      ))}
    </ul>
  );
};
