import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import LastItemDisplay from './components/LastItemDisplay';

function App() {
  return (
    <div className="main">
      <h2 className="title">  Checklist  </h2>
      <TodoList />
      <LastItemDisplay />
    </div>
  );
}

export default App;
