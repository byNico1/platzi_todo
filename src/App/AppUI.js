import React, {useContext} from 'react'
import TodoContext from '../TodoContext'
import TodoCounter from '../TodoCounter';
import TodoSearch from '../ToDoSearch';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import CreateTodo from '../CreateTodo';
import Modal from '../Modal';
import TodoForm from '../TodoForm';

import { TodosError } from '../Todos/index'
import { TodosLoading } from '../Todos/index'
import { EmptyTodos } from '../Todos/index'


const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos, 
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext)

  return (
    <div>
    <TodoCounter />  
    <TodoSearch />

    <TodoList>
      {error && <TodosError />}
      {loading && <TodosLoading />}
      {(!loading && !searchedTodos.length) && <EmptyTodos />}
  
      {searchedTodos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />))}
    </TodoList>

    {openModal && (
      <Modal  >
        <TodoForm />
      </Modal>
    )}

    <CreateTodo 
      setOpenModal={setOpenModal}
      openModal={openModal}
    />   
</div>    
  )
}

export default AppUI