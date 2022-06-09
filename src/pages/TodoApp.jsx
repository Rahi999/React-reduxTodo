import React, { useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completeTodo, deleteTodo, updateTodo } from "../store/actions.js";
import { Navigate } from "react-router-dom";
import { CartContext } from "../context/AuthContext";
import Counter from "./CounterApp"

const TodoApp = () => {
  
  const ref = useRef();
  const { auth } = useContext(CartContext);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos)
  const addNew = () => {
    let values = ref.current.value;
    console.log("values: ",values)
    dispatch(
      addTodo({
        value: ref.current.value,
        isCompleted: false,
      })
    );
  };
  if (auth) {
    return (
     <div>
        <h1>TodoApp</h1>
        <div>
          <input className="input" ref={ref} type="text" placeholder="Add Items..." />

          <button className='add' onClick={addNew}> Add</button>
        </div>
     <div   >   {todos.map((todo) => (
          <div className="container" key={todo.id}> <h3>{ref.current.value} </h3>
          <input type="checkbox"
          onChange={completeTodo}
          className="ibox"
          />
          
           <Counter /> 
          <button className="add1" onClick={deleteTodo} >Delete</button>
          <button className="add1" onClick={updateTodo} >Update</button>
          </div>
        ))}</div>
     </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};
export default TodoApp;
