import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";
import { TodosAction, TodosState } from "./types";

const initialState: TodosState = [
  { id: 0, text: "타입스크립트 강의 듣기", isToggle: true },
  { id: 1, text: "반려동물등록 서비스 프로젝트", isToggle: false },
  { id: 2, text: "일찍 퇴근하기", isToggle: false },
];

const todos = (state: TodosState = initialState, action: TodosAction) => {
  switch (action.type) {
    case ADD_TODO:
      const id = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({ id, text: action.payload, isToggle: false });
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isToggle: !todo.isToggle }
          : todo
      );
    default:
      return state;
  }
};

export default todos;
