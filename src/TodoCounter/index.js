import React, { useContext } from 'react'
import TodoContext from '../TodoContext'
import './TodoCounter.css'


const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext)

  return (
    <header>
      <h1 className="todo__counter-title">Your Tasks</h1>

      <h2 className="todoCounter">Has completado {completedTodos} de {totalTodos} ToDos</h2>
    </header>
    
  )
}

export default TodoCounter