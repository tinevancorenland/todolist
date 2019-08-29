import React from 'react';
import TodoItem from './TodoItem'


function Todolist() {
  return (
    <div>
      <h3>Whatchamahavetodotoday?</h3>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default Todolist;
