import { useAppDispatch } from "../../hooks";
import {
  handleToggleTodoCompleet,
  handleRemoveTodo,
} from "../../store/todo-slice";

type TodoItemType = {
  id: string;
  text: string;
  completed: boolean;
};

type Props = TodoItemType;

export const TodoItem: React.FC<Props> = (props: Props) => {
  const { id, text, completed } = props;

  const dispatch = useAppDispatch();

  return (
    <li style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(handleToggleTodoCompleet(id))}
      />
      <span>{text}</span>
      <span
        style={{ cursor: "pointer", color: "red" }}
        onClick={() => dispatch(handleRemoveTodo(id))}
      >
        &times;
      </span>
    </li>
  );
};
