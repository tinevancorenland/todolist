import React from 'react';
import './App.css';

import Greeting from './Components/Greeting'
import Todolist from './Components/Todolist'

function App() {
  return (
    <div>
      <Greeting/>
      <Todolist/>
    </div>
  );
}

export default App;
