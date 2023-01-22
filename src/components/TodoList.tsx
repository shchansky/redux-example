// import React from "react";
// import { TodoItem } from "./TodoItem";

// type TodoItemType = {
//   id: string;
//   text: string;
//   completed: boolean;
// };

// type Props = {
//   todos: TodoItemType[];
//   handleToggleTodoCompleet: (id: string) => void;
//   handleRemoveTodo: (id: string) => void;
// };

// export const TodoList = (props: Props) => {
//   const { todos, handleToggleTodoCompleet, handleRemoveTodo } = props;

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           id={todo.id}
//           completed={todo.completed}
//           text={todo.text}
//           handleRemoveTodo={handleRemoveTodo}
//           handleToggleTodoCompleet={handleToggleTodoCompleet}
//         />
//       ))}
//     </ul>
//   );
// };

import { useAppSelector } from "../hooks";
import TodoItem from "./TodoItem";

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
