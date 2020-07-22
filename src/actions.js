// 9) import actiontypes as a means of triggering errors when we make typos... this is better than using plain strings because at least misspelling a variable will thown an error

import * as types from "./actionTypes";

//------------------------------
// 6) Here we create our actions.
// Its okay to be confused at this point... trust me
// Here is an analogy that can help understand what is happening here.
//------------------------------

// -You can think of the action as a box or a package that you want to deliver to your friend.

// -Each action aka package will have two things:
// 1) a type => you can think of this as a shipping label or address to mail ath package to
// 2) a payload => you can think of this as the contents of the package. Maybe books you want to mail t a friend.

// -You can think of the function in the reducer as the postoffice.

// -The function in the reducer will recieve the action just as a post office would recieve a package. 

// - The function in the reducer will then run specific logic based on the action type (aka package label) provided => Just as how a post office would deliver a package to the correct address based on the shipping label provided. 

//------------------------------



export const addTodoItem = (itemToAdd)=>{
  return({
      type:types.ADD_TODO_ITEM,
      payload: itemToAdd
  });
}

// another sample that is not implemented in our app yet
export const removeTodoItem = (itemToRemove)=>{
  return({
      type:"REMOVE_TODO_ITEM",
      payload: {itemToRemove}
  });
}

// 6.1) after setting your action, go to the reducer (todoReducer.js) to split up the logic based on the action it receives. 

