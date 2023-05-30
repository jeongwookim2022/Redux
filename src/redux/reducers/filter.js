import { SHOW_ALL, SHOW_COMPLETE } from "../actions";

const initialState = { filter: "ALL" };
export default function filterReducer(prevState = initialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }
  if (action.type === SHOW_ALL) {
    return "ALL";
  }
  return prevState;
}
