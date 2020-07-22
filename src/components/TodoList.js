import React, { Component } from 'react'
import '../syles/TodoList.css';

// 8) Make sure to import the specific actions that this component will be using 
import { addTodoItem } from '../actions';

// 5) we need to import the connect method
import { connect } from 'react-redux';

// 5.2) mapStateToProps() is a method that will inject redux state from 
// your redux store into your Props object. It returns an object.

// store.todoReducer refers to the key called "todoReducer" in the keyvalue 
// pair we set up in the ./reducers/index.js

//**NOTE **/ mapStateToProps and mapDispatchToProps should always go outside of your react component.


const mapStateToProps = (store) => ({
  todoState: store.todoReducer
})

// 8.1) use mapDispatchToProps to inject actions into your props object. Dispatch is a method that will send this action to the reducer.
const mapDispatchToProps = dispatch => ({
  addTodoItem : (itemToAdd)=> dispatch(addTodoItem(itemToAdd)),
})

class TodoList extends Component {
  constructor(){
    super()
    this.submitForm = this.submitForm.bind(this)
  }

  //-------------------------------------
  // When we submit the form, we call this function
  //-------------------------------------
  submitForm(event){
    event.preventDefault();

    // grab the input that the user typed in
    const inputtedItem = document.querySelector("#inputted-item");
    this.props.addTodoItem(inputtedItem.value)
  }

  render() {
    // ---------------------------------------
    // 5.3) From now on we can refer to our redux state 
    // through our props object aka this.props.todoState.savedTodoItems 
    // ---------------------------------------
    // console.log(this.props.todoState.savedTodoItems)

    //-------------------------------------
    // Loop through all todo items in state (using map()) 
    // and render a <h5></h5> for each todo item
    //-------------------------------------

    // looping through the array in state
    const listOfItems =this.props.todoState.savedTodoItems.map((item, id)=>{
         return(<h5 key={id}>{item}</h5>)
    })

    return (
      <div className="todo">
        <form onSubmit={this.submitForm} > 
          <input 
            id="inputted-item" 
            type="text" 
            placeholder="Add Item" 
            autoComplete="off"  
             />
        </form>        
        {/* here we are rendering the <h5>'s that we made earlier using the variable "listOfItems" */}
        {listOfItems}
      </div>
    )
  }
}

// --------------------------------------------------------------------------
// 5.1) This will be how we tell react that this component will be connecting to our redux store
// --------------------------------------------------------------------------
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

// ** Note
// There are two methods used in the connect():
// mapStateToProps => used for getting and using state in this component
// mapDispatchToProps => used for setting/changing state

// Use null if you arent using mapDispatchToProps like this => export default connect(mapStateToProps,null)(TodoDisplay); 
// export default connect(mapStateToProps,mapDispatchToProps)(TodoDisplay);