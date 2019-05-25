export default (todoList: any[], action:any):any => {

    switch(action.type) {
      case 'ADD_TODO': return [...todoList, action.payload]
      case 'REMOVE_TODO': break
      case 'UPDATE_TODO': return [
        ...todoList.slice(0, action.payload.index),
        {...todoList[action.payload.index], ...action.payload.data},
        ...todoList.slice(action.payload.index + 1)
      ]
      case 'FILTER_TODOS': return action.payload.todos.filter(
        (t: {text: string}) => t.text.startsWith(action.payload.query)
      )    
      default: return todoList
    }
  }