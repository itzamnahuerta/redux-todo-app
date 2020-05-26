import React, { Component } from 'react'
import '../syles/TodoList.css';

export default class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      savedTodoItems: ["Make a todo list of all my todo lists", "Make a playlist for every possible occasion", "Meals I want to eat this week"]
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(event, form) {
    event.preventDefault();
    
    // grab the input that the user typed in
    const inputtedItem = document.querySelector("#inputted-item");

    // The parameters "state" & "props" are copies of this components state and props 
    // That way we can manipulate them without touching the real state or real props 
    this.setState((state, props) => {

      state.savedTodoItems.push(inputtedItem.value);
      console.log("------ this is new state -------", state.savedTodoItems)
      return {savedTodoItems: state.savedTodoItems};
    });
  }


  render() {
    // -------------------------------------------------
    // loop through all todo items in state using map() 
    // & render a <h5> tag for each todo item
    // -------------------------------------------------
    const listOfItems = this.state.savedTodoItems.map((item, index) => {
      // console.log("testing list items****", id)
      return (<div id="item-wrapper" key={index}><p id="item" >{item}</p> </div>)
    })

    return (
      <div className="todo">
        <form onSubmit={this.submitForm} > 
          <input id="inputted-item" type="text" placeholder="Add Item" autoComplete="off" ></input>
          {/* <button type="submit" hidden> </button> */}
        </form>        
        {/* here we are rendering the <h5>'s that we made earlier using the variable "listOfItems" */}
        {listOfItems}
      </div>
    )
  }
}
