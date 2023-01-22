// type TodoItemType = {
//   id: string;
//   text: string;
//   completed: boolean;
// };

// type Props = TodoItemType & {
//   handleToggleTodoCompleet?: (id: string) => void;
//   handleRemoveTodo?: (id: string) => void;
// };

// export const TodoItem = (props: Props) => {
//   const { text, completed,

//     // handleToggleTodoCompleet,
//     // handleRemoveTodo
//   } =
//     props;

//   return (
//     <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
//       <input
//         type="checkbox"
//         checked={completed}
//         // onChange={() => handleToggleTodoCompleet?(id)}
//       />
//       <span
//         style={{
//           textDecoration: completed ? "line-through" : "none",
//         }}
//       >
//         {text}
//       </span>
//       <button
//         style={{ color: "red", cursor: "pointer" }}
//         // onClick={() => handleRemoveTodo?(id)}
//       >
//         &times;
//       </button>
//     </li>
//   );
// };

import { useAppDispatch } from "../hooks";
// import {toggleComplete, removeTodo} from '../store/todoSlice';
import {
  handleToggleTodoCompleet,
  handleRemoveTodo,
} from "../store/todo-slice";

type TodoItemType = {
  id: string;
  text: string;
  completed: boolean;
};

type Props = TodoItemType;

const TodoItem: React.FC<Props> = (props: Props) => {
  const { id, text, completed } = props;

  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(handleToggleTodoCompleet(id))}
      />
      <span>{text}</span>
      <span onClick={() => dispatch(handleRemoveTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
