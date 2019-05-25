import * as React from 'react'
import './styles.css'

const TodoItem = (props: {id: number, done: boolean, text: string, onChange: (i: {name: string, value: string | boolean}) => void, onDelete: () => any }) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange({
        name: e.target.name,
        value: e.target.type === 'text'? e.target.value: e.target.checked
      })
    }

    const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      props.onDelete()
    }
  
    return (
      <li key={props.id} className="todoContainer">
        <input 
          className="todoCheck"
          onChange={onChange}
          type="checkbox" 
          name="done"
          defaultChecked={props.done}/>
        <input 
          className="todoInput"
          value={props.text}
          name="text"
          placeholder="Text foo bar"
          onChange={onChange}
          style={{
            textDecoration: props.done? 'line-through': 'none'          
          }}
        />  
        <button
          className="deleteButton"
          onClick={onDelete}
        >X</button>        
          
      </li>
    )
  }

  export default TodoItem