import { legacy_createStore as createStore } from "redux";
import REDUCER from "./reducers/reducer";

const store = createStore(REDUCER);

export default store;
