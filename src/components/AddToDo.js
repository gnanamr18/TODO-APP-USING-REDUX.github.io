import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoslice";
import "../App.css";

const AddToDo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="container">
      <h2> TO DO APP </h2>
      <form onSubmit={addTodoHandler} className="">
        <input
          type="text"
          className=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="">
          Add To Do
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
