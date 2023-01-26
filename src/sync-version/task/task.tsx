import { useAppDispatch } from "hooks";
import { toggleTodoCompleet, removeTodo } from "store/sync-version-slice";

type Props = {
  id: string;
  text: string;
  completed: boolean;
};

export const Task: React.FC<Props> = (props) => {
  const { id, text, completed } = props;

  const dispatch = useAppDispatch();

  return (
    <li style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleet(id))}
      />
      <span>{text}</span>
      <span
        style={{ cursor: "pointer", color: "red" }}
        onClick={() => dispatch(removeTodo(id))}
      >
        &times;
      </span>
    </li>
  );
};
