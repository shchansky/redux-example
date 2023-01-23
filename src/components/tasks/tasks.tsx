import { useAppSelector } from "../../hooks";
import { TodoItem } from "../task/task";

export const TodoList = () => {
  const todos = useAppSelector((state) => state.tasks.list);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
