// state Type timeline
// 1. ['coding', 'lunch']
// 2. [{todo: 'coding', done: false}, {todo: 'lunch', done: true}]
// 3. {todos: [{todo: 'coding', done: false}, {todo: 'lunch', done: true}], filter: 'ALL'}
import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from "./actions";

// (1) Set init value
const initialState = { todos: [], filter: "ALL" };
export function todoApp(prevState = initialState, action) {
  // export function todoApp(prevState, action) {
  // (2) Set init value
  // if (prevState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return {
      ...prevState, // du to 'filter'
      todos: [...prevState.todos, { todo: action.todo, done: false }], // overwirte 'todos'
    };
  }

  if (action.type === COMPLETE_TODO) {
    return {
      ...prevState,
      todos: prevState.todos.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: true };
        } else {
          return todo; // return { ...todo, ...done };
        }
      }),
    };
  }

  if (action.type === SHOW_COMPLETE) {
    return {
      ...prevState,
      fitler: "COMPLETE",
    };
  }
  if (action.type === SHOW_ALL) {
    return {
      ...prevState,
      fitler: "ALL",
    };
  }
  return prevState;
}
