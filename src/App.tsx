import React from 'react';
import './App.css';
import TodoList from './components/TodoList/index';
 
const App: React.FC = () => {
 
  const [todos, setTodos] = React.useState([
    {done: false, text: 'One'},
    {done: true, text: 'Two'},
    {done: false, text: 'Three'},
    {done: false, text: 'Four'},
    {done: false, text: 'Five'},
  ])

  return (
    <div className="App">
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
