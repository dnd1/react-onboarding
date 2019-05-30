import React from 'react';
import './App.css';
import TodoList from './components/TodoList/index';
import Todo from './models/Todo';
 
const App: React.FC = () => {
 
  const initialData: Todo[] = [
    {done: false, text: 'One'},
    {done: true, text: 'Two'},
    {done: false, text: 'Three'},
    {done: false, text: 'Four'},
    {done: false, text: 'Five'},
  ]

  const [todos, setTodos] = React.useState(initialData)

  return (
    <div className="App">
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
