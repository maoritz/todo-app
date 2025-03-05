import React from 'react'
import TodoItem from './TodoItem'


function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ul className="list">
    {todos.map(todo => {
      return (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      )
     })}
    </ul>
  )
}

export default TodoList