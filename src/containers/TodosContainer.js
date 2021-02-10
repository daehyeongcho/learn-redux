import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

const TodosContainer = () => {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const todos = useSelector((state) => state.todos);

  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook입니다.
  const dispatch = useDispatch();
  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return (
    <Todos
      // 상태와
      todos={todos}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onCreate={onCreate}
      onToggle={onToggle}
    />
  );
};

export default TodosContainer;
