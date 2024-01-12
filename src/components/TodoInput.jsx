import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faPlus } from "@fontawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/TodoSlice";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      alert("Enter a task before adding!");
      setValue("");
      return;
    }
    dispatch(addTask({ task: value }));
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="todo__input" style={{marginLeft:'500px'}}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Add a task here..."
        name="content" style={{fontSize:'30px'}}
      />
      <button type="submit" className="btn btn-default " style={{fontSize:'30px'}}>Submit
        {/* <FontAwesomeIcon icon={faPlus} /> */}
      </button>
    </form>
  );
};

export default TodoInput;