import React, { useContext } from 'react'
import TodoContext from '../TodoContext'
import './ToDoSearch.css'

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  const onSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <input 
      placeholder="Cebolla" className="searchbar" 
      onChange={onSearchChange} 
    />

  )
}

export default TodoSearch