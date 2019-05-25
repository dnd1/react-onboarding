import * as React from 'react'
import todosReducer from './reducer'
import TodoItem from '../TodoItem/index';

const TodoList = (props: {todos: any[]}) => {

    const [todos, dispatch] = React.useReducer(todosReducer, props.todos || [])
  
    const onChange = (i:number) => {
      return (tic: {name: string, value: any}) => {
        dispatch({
          type: 'UPDATE_TODO',
          payload: {
            index: i,
            data: {
              [tic.name]: tic.value
            }
          }
        })
      }
    }
  
    const todoElements = todos.map((t:any, i:number) => <TodoItem 
      key={i}
      id={i}
      done={t.done}
      text={t.text}
      onChange={onChange(i)}
    />)
  
    const onFilterText = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: 'FILTER_TODOS',
        payload: {
          todos: props.todos,
          query: e.target.value
        }
      })
    }
  
    const onAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          text: 'new todo',
          done: false
        }
      })
    }
  
    console.log(todos)
  
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