import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state);
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
