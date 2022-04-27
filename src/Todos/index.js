 // src/TodosError/index.js
 import React from 'react';
import './loading.css'

 function TodosError({ error }) {
 return <p>Desespérate, hubo un error...</p>;
 }
 export { TodosError };
 // src/TodosLoading/index.js
 function TodosLoading({error}) {
    return (
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
          <p className="LoadingTodo-text">Cargando TODOS...</p>
        <span className="LoadingTodo-deleteIcon"></span>
     </div>
);

 }
 export { TodosLoading };
 // src/EmptyTodos/index.js
 function EmptyTodos() {
 return (
  <div className="primertodo">
   <p>iCrea tu primer TODO!</p>
  </div>
 );
 }
 export { EmptyTodos };
 