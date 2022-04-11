import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  return (
      <div>
        <h1>TodoList</h1>
        {props.todos.map(item => (
          <Todo toggleTodo={props.toggleTodo} key={item.id} item={item} />
        ))}
      </div>
    )
}

export default TodoList;
