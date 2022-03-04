import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice";

function CreateTodo() {

  const [text,setText] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todoAdded(text));
    setText("");
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" onChange={handleChange} value={text}/>
        </p>
        <input type="submit" onClick={handleSubmit}/>
      </form>
      <p>Form text: {text}</p>
    </div>
  );
}

export default CreateTodo; 