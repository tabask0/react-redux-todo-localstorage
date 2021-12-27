import React, { useState } from "react";
import { Button, Input } from "antd";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

const TodoInput = () => {
  const [message, setMessage] = useState();
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{ color: "white", fontWeight: "bold" }}>Add a new to-do</h1>
      <Input.Group className="todo-input">
        <Input
          placeholder="Walk the dog"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="primary"
          onClick={() =>
            dispatch(
              addTodo({
                id: uniqid(),
                message: message,
              })
            )
          }
        >
          Add
        </Button>
      </Input.Group>
    </div>
  );
};

export default TodoInput;
