import { useAppSelector } from "hooks";
import { Task } from "../task/task";
import { useSelector } from "react-redux";

export const TaskList = () => {
  const todos = useAppSelector((state) => state.asyncVersion.list);

  console.log(todos);
  // const todos = useSelector((state) => state.asyncVersion);

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
