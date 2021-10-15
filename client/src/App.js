import React, { useState, useRef } from 'react'
import TodoList from './TodoList'
import uuidv4 from './uuidv4'

function App() {
  
  const [todos, setTodos ] = useState([])
  const todoNameRef = useRef

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, ]
    })
    todoNameRef.current.value = null
  }
  
  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button type="button" onClick={handleAddTodo}>Add Todo</button>
      <button type="button">Clear Todos</button>
      <div>{todos.length} Todos left</div> 
    </>
  );
}

export default App;
