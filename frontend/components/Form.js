import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      itemText: ''
    }
  }

  handleChanges = event => {
    this.setState({
      itemText: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(event, this.state.itemText)
    this.setState({
      itemText: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name='item'
          value={this.state.itemText}
          onChange={this.handleChanges}
        />
        <button>Submit</button>
      </form>
    )
  }
}
