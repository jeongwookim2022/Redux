// state
// ['coding', 'lunch']

import { ADD_TODO } from "./actions";

// const initialState = [];
// function todoApp(prevState = initialState, action)
export function todoApp(prevState, action) {
  // Set init value
  if (prevState === undefined) {
    return [];
  }

  if (action.type === ADD_TODO) {
    return [...prevState, action.todo];
  }

  return prevState;
}
