import React from 'react'

export default function Todo({todo , toggledTodo}) {

    function handleTodoClick(){
        toggledTodo(todo.id)
    }



    return (
        <div>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}
        </div>
    )
}
