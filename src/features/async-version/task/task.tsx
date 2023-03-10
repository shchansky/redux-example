import { useAppDispatch } from "store/hooks";
import {
  deleteTodo,
} from "store/async-version-slice";

type Props = {
  id: string;
  title: string;
  completed: boolean;
};

export const Task: React.FC<Props> = (props) => {
  const { id, title, completed } = props;

  const dispatch = useAppDispatch();

  return (
    <li style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span
        style={{ cursor: "pointer", color: "red" }}
        onClick={() => dispatch(deleteTodo(id))}
      >
        &times;
      </span>
    </li>
  );
};
