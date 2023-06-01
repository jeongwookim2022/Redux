import { connect } from "react-redux";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <li>{todo.todo}</li>;
      })}
    </ul>
  );
}

// state를 받아서 props 객체를 만듦.
//- TodoList에 todos로 props가 들어감.
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
// todos를 변경하는 함수를 만듦.
// - TodoList에 그 함수가 props로 들어감.
const mapDispatchToProps = (dispatch) => {
  return {};
};
const TodoListContainer = connect(
  mapStateToProps, // Store의 state를 받아서 어떤 props로 넣을것인지.
  mapDispatchToProps // (state에) dispatch할 수 있는 함수를 props로 넣어줌.
)(TodoList);

export default TodoListContainer;
