import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todos
    }
  }

  addItem = (e, item) => {
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [ ...this.state.todos, newItem ]
    })
  }

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (todoId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList
          toggleTodo={this.toggleTodo} 
          todos={this.state.todos}
        />
        <Form 
          addItem={this.addItem}
        />
      </div>
    )
  }
}
