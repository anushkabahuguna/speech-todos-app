import TodoApp from './TodoApp';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <TodoApp className='App-main' />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

