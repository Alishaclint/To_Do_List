import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTasks } from "../reducers/TodoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    return state.tasks;
  });

  const removeTask = (id) => {
    dispatch(deleteTask({ id }));
  };
  const toggleCompleteTask = (id) => {
    dispatch(toggleTasks(id));
  };

  return (
    <div>
      <ul className="todo__list" style={{listStyleType:'none'}}>
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <li key={todo.id} className="todo__list__item">
              <p style={{color:'blue' , backgroundColor:'rgb(220,220,220)', marginBottom:'0px'}}>{todo.name}</p>
              <div className="todo__list__options" style={{backgroundColor:'rgb(220,220,220)', paddingTop:'10px' , paddingLeft:'10px', paddingBottom:'10px'}}>
                <span onClick={() => toggleCompleteTask(todo.id)} >
                {/* <FontAwesomeIcon icon={faCheck} /> */}
                </span> 
                <span onClick={() => removeTask(todo.id)}>

                  <button className="btn">Delete Task</button>
                   {/* <FontAwesomeIcon icon={faTimes} />  */}
                </span >
              </div>
            </li>
          ))}
      </ul>

      <ul className="todo__list todo__list--completed" >
        {todos
          .filter((todo) => todo.completed)
          .map((completedTask) => (
            <li key={completedTask.id} className="todo__list__item complete" style={{Color:"red"}}>
              <p>{completedTask.name}</p>
              <span onClick={() => removeTask(completedTask.id)}>
                 {/* <FontAwesomeIcon icon={faCheck} />  */}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;