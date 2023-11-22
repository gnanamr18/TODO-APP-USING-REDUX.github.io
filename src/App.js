import React from 'react'
import './App.css';
import  AddToDo  from './components/AddToDo';
import Todos from './components/Todos'




function App() {
  return (
    <div className="App">
      <AddToDo />
      <Todos/>
    </div>
  );
}

export default App;
