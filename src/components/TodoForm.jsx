import { useContext, useRef } from "react";
import { addTodo } from "../redux/actions";
import { connect } from "react-redux";

function TodoForm({ add }) {
  const inputRef = useRef();
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );

  function click() {
    add(inputRef.current.value);
  }
}

export default connect(
  //mapStateToProps
  (state) => ({}),
  // mapDispatchToProps
  (dispatch) => ({
    add: (todo) => {
      dispatch(addTodo(todo));
    },
  })
)(TodoForm);
