import * as React from 'react'
import TodoItem from '../TodoItem/index';
import Todo from '../../models/Todo';

export interface TodoListProps {
  todos: Todo[],
  setTodos: (todos: Todo[]) => any
}

const TodoList = (props: TodoListProps) => {

    const [todos, setTodos] = React.useState(props.todos) 

    React.useEffect(() => {
      setTodos(props.todos)
    }, [props.todos])
  
    const onChange = (i:number) => {
      return (tic: {name: string, value: any}) => {
        props.setTodos([
          ...props.todos.slice(0, i),
          {...props.todos[i], [tic.name]: tic.value},
          ...props.todos.slice(i+1)
        ])
      }
    }

    const onDelete = (i:number) => {
      return () => {
        props.setTodos([
          ...props.todos.slice(0, i),
          ...props.todos.slice(i+1)
        ])
      }
    }
  
    const todoElements = todos.map((t:Todo, i:number) => <TodoItem 
      key={i}
      id={i + ""}
      done={t.done}
      text={t.text}
      onChange={onChange(i)}
      onDelete={onDelete(i)}
    />)
  
    const onFilterText = (e: React.ChangeEvent<HTMLInputElement>) => {
      const filteredTodos = props.todos.filter(
        (t:{text:string}) => t.text.toLowerCase().startsWith(e.target.value.toLowerCase())
      )

      if (!filteredTodos.length) { setTodos(props.todos) }

      setTodos(filteredTodos)
    }
  
    const onAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
      const newTodo:Todo = {text: '', done: false}
      props.setTodos([...props.todos, newTodo])
    }
  
    return (
      <div className="todoList">
        <input 
          onChange={onFilterText}
          placeholder="Search"
          className="searchInput"
        ></input>
        <button onClick={onAddTodo} className="addTodoBtn">Add TODO</button>
        <ul>
          {todoElements}        
        </ul>
      </div>
    )
  }

  export default TodoList