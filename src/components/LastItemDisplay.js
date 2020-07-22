import React from 'react';
import '../syles/LastItemDisplay.css';
import { connect } from 'react-redux';

// ------------------------------------------------------
// Since this component doesn't have access to TodoDisplay.js's state...
// this component doesn't know what the last item added was. 
// Redux can help fix this .
// ------------------------------------------------------

const mapStateToProps = (store) => ({
  todoState: store.todoReducer
})

class LastItemDisplay extends React.Component {
  render(){
    console.log("find me at last item display: ", this.props.todoState.savedToDoItems[this.props.todoState.savedToDoItems.length -1])
       // from updatedstate of savedtodoitems[-1] element and display here 
       const lastElementinTodo = this.props.todoState.savedToDoItems[this.props.todoState.savedToDoItems.length -1]
      return (
        <div id="last-item-display">
          The last item added goes in here: {lastElementinTodo}
        </div>
    );
  }
}

export default connect(mapStateToProps,null)(LastItemDisplay);
