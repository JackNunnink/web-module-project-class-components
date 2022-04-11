import React from 'react'

const Todo = props => {
    return (
      <div onClick={ () => props.toggleTodo(props.item.id) } className='todo'>
        <p>{props.item.name} {`${props.item.completed ? '✔️' : ''}`}</p>
      </div>
    )
}

export default Todo;