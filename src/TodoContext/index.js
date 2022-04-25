import React, {createContext, useState} from 'react';
import useLocalStorage from './useLocalStorage';

const TodoContext = createContext();

export const TodoProvider = (props) => {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        err
    } = useLocalStorage('TODOS_V1', []);
    
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false)
    
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    
    let searchedTodos = [];
    
    !setSearchValue.length >= 1 ? searchedTodos = todos : searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
      });
    
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
        };
    
    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
    
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
      };
    
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
    
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };


    return (
        <TodoContext.Provider value={{
            err,
            loading,
            totalTodos, 
            completedTodos,
            searchValue, 
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }} >
            {props.children}
        </TodoContext.Provider>
    )
}

<TodoContext.Consumer></TodoContext.Consumer>


export default TodoContext