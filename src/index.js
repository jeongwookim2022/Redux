import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import ReduxContext from "./contexts/ReduxContext";
// import { ShowComplete, addTodo, completeTodo, showAll } from "./redux/actions";

// Store의 state가 변경되면 subscribe함수 내부의 함수가 호출됨.
// It returns unsubscribe()
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addTodo("dinner"));
// store.dispatch(completeTodo(0));
// store.dispatch(ShowComplete());
// store.dispatch(showAll());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
