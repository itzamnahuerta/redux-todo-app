// -----------------------------------------------------------------------------------
// 9)  This file of actiontypes is just used as a means of triggering errors when we make typos... 
// this is better than using plain strings because at least misspelling a variable will thown an error.
// If you Mispell a string the reducer will do nothing (no errors) because it wont see the correct action type (since you mispelled it... shame on you⚱)
// -----------------------------------------------------------------------------------
export const ADD_TODO_ITEM = "ADD_TODO_ITEM";