import React from 'react';
import TodoItem from './TodoItem'


function Todolist() {
  return (
    <div className="todolist">
      <h3 className="todolisttitle">Whatchamahavetodotoday?</h3>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default Todolist;
