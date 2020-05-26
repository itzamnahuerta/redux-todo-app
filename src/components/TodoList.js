import React, { Component } from 'react'
import '../syles/TodoList.css';

export default class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      savedTodoItems: [ "make a todo list of all my todo lists", "make a playlist for every possible occasion", "weekly recipe"]
    }
  }
  render() {
    return (
      <div className="todo">
        <h3> list </h3>
      </div>
    )
  }
}
