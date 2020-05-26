import React, { Component } from 'react'
import '../syles/TodoList.css';

export default class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      savedTodoItems: [ "Make a todo list of all my todo lists", "Make a playlist for every possible occasion", "Weekly recipe"]
    }
  }
  render() {
    // --------------
    // loop through all todo items in state using map() 
    // & render a <h5> tag for each todo item
    // --------------
    const listOfItems = this.state.savedTodoItems.map((item) => {
      return <div id="item-wrapper"><p id="item">{item}</p> </div>
    })
    return (
      <div className="todo">
        <form> 
          <input id="inputted-item" placeholder="Add Item"></input>
          <button type="submit" hidden> </button>
        </form>        
        {/* here we are rendering the <h5>'s that we made earlier using the variable "listOfItems" */}
        {listOfItems}
      </div>
    )
  }
}
