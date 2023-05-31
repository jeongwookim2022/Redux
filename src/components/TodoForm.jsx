import { useContext, useRef } from "react";
import { addTodo } from "../redux/actions";
import ReduxContext from "../contexts/ReduxContext";

export default function TodoForm() {
  const store = useContext(ReduxContext);

  const inputRef = useRef();
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );

  function click() {
    store.dispatch(addTodo(inputRef.current.value));
  }
}
