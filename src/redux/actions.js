// Type names
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

// Action Creators: they returns Action objects

// {type: ADD_TODO, todo: 'a thing todo'}
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}
// {type: COMPLETE_TODO, index: num}
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export function showAll() {
  return { type: SHOW_ALL };
}
export function ShowComplete() {
  return { type: SHOW_COMPLETE };
}
