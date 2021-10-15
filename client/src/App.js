import React from 'react'
import TodoList from './TodoList'

function App() {
  return (
    <>
      <TodoList />
      <input type="text" />
      <button type="button">Add Todo</button>
      <button type="button">Clear Completed Todo</button>
      <div>Number of Todos left</div> 
    </>
  );
}

export default App;
