import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
  id: string;
  title: string;
  description: string;
  priority: string;
  isCompleted: boolean;
};

type todoInitialTodo = { todos: TTodo[] };
const initialState: todoInitialTodo = {
  todos: [],
};

const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const task = state.todos.find((item) => item.id === action.payload);
      const newTodos = state.todos.filter((item) => item.id !== action.payload);
      task!.isCompleted = !task?.isCompleted;
      newTodos.push(task as TTodo);
      state.todos = newTodos;
    },
    filterTodo: (state, action) => {
      state.todos = state.todos.filter(
        (item) => item.priority.toLowerCase() === action.payload.toLowerCase()
      );
    },
  },
});
export const { addTodo, removeTodo, toggleTodo, filterTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
