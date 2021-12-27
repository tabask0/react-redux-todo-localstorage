import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons/lib/icons";
import { deleteTodo, updateTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState(todo.message);

  return (
    <div className="todo">
      <div className="todo-container">
        <h2 className="todo-id">#{todo.id}</h2>
        {edit ? (
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        ) : (
          <p className="todo-message">{todo.message}</p>
        )}
        <div className="todo-icons">
          <EditOutlined
            className="edit-icon"
            onClick={() => {
              dispatch(updateTodo({ ...todo, message: message }));
              if (edit) {
                setMessage(todo.message);
              }
              setEdit(!edit);
            }}
          />
          <DeleteOutlined
            className="delete-icon"
            onClick={() => dispatch(deleteTodo(todo.id))}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
