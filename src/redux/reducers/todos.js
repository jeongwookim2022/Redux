import { ADD_TODO, COMPLETE_TODO } from "../actions";

const initialState = [];
export default function todosReducer(prevState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...prevState, { todo: action.todo, done: false }]; // overwirte 'todos'
  }

  if (action.type === COMPLETE_TODO) {
    return prevState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      } else {
        return todo; // return { ...todo, ...done };
      }
    });
  }

  return prevState;
}
