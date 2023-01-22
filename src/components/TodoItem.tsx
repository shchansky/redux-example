import { useAppDispatch } from "../hooks";
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
