import { connect, useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import TodoForm from "../components/TodoForm.jsx";
import { useCallback } from "react";

// Connect(Container)
// - Links store with presentational compo like TodoForm above.
// - send states in store as props.
// - send actions as

// const TodoFormContainer = connect(
//   //mapStateToProps
//   (state) => ({}),
//   // mapDispatchToProps - dispatch actions
//   (dispatch) => ({
//     add: (todo) => {
//       dispatch(addTodo(todo));
//     },
//   })
// )(TodoForm);

////////////////////////////////////////////
// Hook instead of connect func
export default function TodoFormContainer() {
  const dispatch = useDispatch();
  const add = useCallback(
    (todo) => {
      dispatch(addTodo(todo));
    },
    [dispatch]
  );

  return <TodoForm add={add} />;
}
