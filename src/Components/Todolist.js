import React from 'react';
import TodoItem from './TodoItem'
import todoData from './todoData'


function Todolist() {

  console.log(todoData)

  const TodoComponent = todoData.map(todo => <TodoItem key={todo.id} content={todo.content} />)

  return (
    <div className="todolist">
      <h3 className="todolisttitle">Whatchamahavetodotoday?</h3>
      {TodoComponent}
    </div>
  );
}

export default Todolist;
