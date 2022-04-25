import React, { useContext, useState } from 'react'
import TodoContext from '../TodoContext'
import './TodoForm.css'

const TodoForm = () => {
    const [newTodoValue, setNewTodoValue ] = useState('')

    const {
        addTodo,
    } = useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    const onCancel = () => {

    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
    }

  return (
    <form onSubmit={onSubmit} >
        <label>...</label>
        <textarea 
        value={newTodoValue}
          onChange={onChange}
          placeholder="Cortar la cebolla"
        />
        <div>
            <button 
              className="TodoForm-button TodoForm-button-cancel"
              type="button"
              onClick={onCancel}
            >
                Cancelar
            </button>
            <button 
              className="TodoForm-button TodoForm-button-add"
              type="submit"
            >
                Anadir
            </button>
        </div>
    </form>
  )
}

export default TodoForm