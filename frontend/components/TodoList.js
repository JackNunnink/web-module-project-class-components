import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  console.log(props)
  return (
      <div>
        <h1>TodoList</h1>
        {props.todos.map(item => (
          <Todo key={item.id} item={item} />
        ))}
      </div>
    )
}

export default TodoList;
