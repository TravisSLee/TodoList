import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import {uuid} from 'uuidv4'


function App() {
  
  const [todos, setTodos ] = useState([])
  
  const todoNameRef = useRef()
  
  useEffect(() => {
    const storedTodos = JSON.parse(window.localStorage.getItem('todos'))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => { 
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function toggledTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), name: name, 
        completed: false}]
    })
    todoNameRef.current.value = null
  }
  
  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }
  return (
    <>
      <TodoList todos={todos} toggledTodo={toggledTodo} />
      <input ref={todoNameRef} type="text" />
      <button type="button" onClick={handleAddTodo}>Add Todo</button>
      <button type="button" onClick={handleClearTodos}>Clear Todos</button>
      <div>{todos.filter(todo => !todo.completed).length} Todos left</div> 
    </>
  );
}

export default App;
