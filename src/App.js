import React from 'react';
import './App.css';

import Greeting from './Components/Greeting'
import Todolist from './Components/Todolist'
import Jokes from './Components/Jokes'

function App() {
  return (
    <div>
      <Greeting/>
      <Todolist/>
      <Jokes/>
    </div>
  );
}

export default App;
