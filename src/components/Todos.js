import React from 'react'
import {  useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { removeTodo, removeTodoTodo } from "../features/todo/todoslice";

const Todos = () => {
   const todos = useSelector(state => state.todos)
   const dispatch = useDispatch();

   console.log(todos)

  return (
  <div className=''>
    <div>Todos</div>
    {todos.map((todo)=> (<div key={todo.id}> {todo.text}  <button onClick={()=>dispatch(removeTodo(todo.id))}>Remove</button> </div>))} 
   
  </div>
  )
}

export default Todos