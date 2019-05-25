import * as React from 'react'

const TodoItem = (props: {id: number, done: boolean, text: string, onChange: (i: {name: string, value: string | boolean}) => void }) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange({
        name: e.target.name,
        value: e.target.type === 'text'? e.target.value: e.target.checked
      })
    }
  
    return (
      <li key={props.id}>
        <input 
          onChange={onChange}
          type="checkbox" 
          name="done"
          defaultChecked={props.done}/>
        <input 
          value={props.text}
          name="text"
          placeholder="Text foo bar"
          onChange={onChange}
        />      
          
      </li>
    )
  }

  export default TodoItem