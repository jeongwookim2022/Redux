import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { addTodo } from "./redux/actions";

// Store의 state가 변경되면 subscribe함수 내부의 함수가 호출됨.
// It returns unsubscribe()
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store);
store.dispatch(addTodo("coding"));
store.dispatch(addTodo("working"));
store.dispatch(addTodo("playing"));
unsubscribe(); // State in Store is changed by the codes below. But not printed out on console by unsubscribe.
store.dispatch(addTodo("coding"));
store.dispatch(addTodo("working"));
store.dispatch(addTodo("playing"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
