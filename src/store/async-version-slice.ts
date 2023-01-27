import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from "@reduxjs/toolkit";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export type InitialState = {
  list: Task[];
  loading: boolean;
  error: string | null;
};

export const fetchTodos = createAsyncThunk<
  Task[],
  undefined,
  { rejectValue: string }
>("todos/fetchTodos", async function (_, { rejectWithValue }) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );

  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return data;
});

export const addNewTodo = createAsyncThunk<
  Task,
  string,
  { rejectValue: string }
>("todos/addNewTodo", async function (text, { rejectWithValue }) {
  const todo = {
    title: text,
    userId: 1,
    completed: false,
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    return rejectWithValue("Can't add task. Server error.");
  }

  return (await response.json()) as Task;
});

export const toggleStatus = createAsyncThunk<
  Task,
  string,
  { rejectValue: string; state: { todos: InitialState } }
>("todos/toggleStatus", async function (id, { rejectWithValue, getState }) {
  const todo = getState().todos.list.find((todo) => todo.id === id);

  if (todo) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !todo.completed,
        }),
      }
    );

    if (!response.ok) {
      return rejectWithValue("Can't toggle status. Server error.");
    }

    return (await response.json()) as Task;
  }

  return rejectWithValue("No such todo in the list!");
});

export const deleteTodo = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("todos/deleteTodo", async function (id, { rejectWithValue }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    return rejectWithValue("Can't delete task. Server error.");
  }

  return id;
});

////////////////////////////

const initialState: InitialState = {
  list: [],
  loading: false,
  error: null,
};

////////////////////////////////

// export const asyncVersionSlice = createSlice({
//   name: "syncVersion",

//   initialState,

//   reducers: {
//     addTodo(state, action: PayloadAction<string>) {
//       console.log("state", state);
//       console.log("action", action);

//       state.list.push({
//         id: new Date().toISOString(),
//         text: action.payload,
//         completed: false,
//       });
//     },

//     removeTodo(state, action: PayloadAction<string>) {
//       state.list = state.list.filter((el) => el.id !== action.payload);
//     },

//     toggleTodoCompleet(state, action: PayloadAction<string>) {
//       const toggleTodo = state.list.find((todo) => todo.id === action.payload);

//       if (toggleTodo) {
//         toggleTodo.completed = !toggleTodo.completed;
//       }
//     },
//   },
// });




const asyncVersionSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(addNewTodo.pending, (state) => {
        state.error = null;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(toggleStatus.fulfilled, (state, action) => {
        const toggledTodo = state.list.find(todo => todo.id === action.payload.id);
        if (toggledTodo) {
          toggledTodo.completed = !toggledTodo.completed;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter(todo => todo.id !== action.payload);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  }
});









// export const { addTodo, removeTodo, toggleTodoCompleet } =
//   asyncVersionSlice.actions;

// export default asyncVersionSlice.reducer;


// export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default asyncVersionSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}