import { addTodo, removeTodo, toggleTodo } from ".";

export type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>;

export type Todo = {
  id: number;
  text: string;
  isToggle: boolean;
};

export type TodosState = Todo[];
