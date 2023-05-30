import { combineReducers } from "redux";
import todosReducer from "./todos";
import filterReducer from "./filter";

const reducer = combineReducers({
  todos: todosReducer,
  fitler: filterReducer,
});
export default reducer;
