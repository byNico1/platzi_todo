import React from 'react'
import './CreateTodo.css'



const CreateTodo = ({ setOpenModal, openModal }) => {
  const OnClickButton = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className="create__todo-container">
      <button className="todo__button"
      onClick={OnClickButton}>+</button>
    </div>
    
  )
}

export default CreateTodo