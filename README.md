### Redux Setup 
<br>

```
npm i react-redux

npm i redux
``` 
<br><br>
##### STEP 1
>  <b>index.js</b>


<b>1.0.</b> We need to import this Provider to <b> GIVE </b> our app access to redux state. We do this using `react-redux` because this is a react application.

  ```js
  import { Provider } from 'react-redux';
  ```
<b>1.1.</b> import store (which has not been created as of yet) but will be given to `Provider` as an attribute so our application can access it 😺

  ```js
  import store from './store';
  ```

Now our app will render the following

```js

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root')
);
```
<br>

##### STEP 2
> <b>store.js</b>


```
in src/

touch store.js
```

<b>2.0.</b> import createStore function will create our redux store

```js

import { createStore } from 'redux';
```
<b>2.1.</b> We haven't made this folder & file yet but we need to import our reducers located within `./reducers/index.js` which is compiling all of our reducers to one file, to then be passed to createStore function (behind the scenes magic). We then have  it stored inside our variable `store` which is then passed on to our `Provider` component in `index.js`

```js

import reducers from './reducers/index';

const store = createStore(reducers)

export default store;

// next step => create our reducers folder and files 
```


##### STEP 3
> <b>reducers/index.js </b>

```
take reducers

touch index.js todoReducer.js
```

<b>3.0.</b> Let's start with `index.js` file 

  - We will import the `combineReducers()` function from redux to combine the reducers of our application into one 

  ```js

  import { combineReducers } from 'redux';
  import { todoReducer } from './todoReducer';
  ```
<b>3.1.</b> This function `combineReducers` takes in an object. This object will have all of the reducers you choose to create for your app. The keys can be named anything but the value should correspond to the correct reducer file. 

```js
const reducers = combineReducers({
  todoReducer: todoReducer,
})

export default reducers;

```

##### STEP 4
> <b>src/reducers/todoReducer.js </b>

Every reducer consists of just 2 things 
- an object
- a function.

<b>4.0.</b> We will import our action types here although they have not been created as of yet 

```js
import * as types from '../actionTypes';
```

<b>4.1.</b> It is an <b>object</b> representing our state that we are starting out with in our web app. This is similar to react <b> this.state = {} </b>

```js

const initialState = {
   savedTodoItems: [
    "Make a todo list of all my todo lists", 
    "Make a playlist for every possible occasion",
    "Stop checking phone compulsively" 
    ]
}
```

<b>4.2.</b> A function for storing logic to change the state

```js

function todoReducer(state = initialState, action) {
  /**
   note: in order to avoid directly manipulating
  state, we need to create a copy of the array since 
  it was passed by reference. A quick way to make a copy of 
  an array is to use the .slice() method. It will return a 
  clone of that array. 
  
  You should name the copy of any array or object the same
  as their key in the initial state 
  **/ 
  
  const savedTodoItems = state.savedTodoItems.slice();

  // How to copy an object ? 
  // const copyOfObj = JSON.parse(JSON.stringify(state.nameofObj))

}

// 4.3. next step => connecting our react components to react store 
// make your way to src/Components/TodoList.js
```


##### STEP 5

> <b> TodoList.js </b>

<b>5.0.</b> We need to import the connect method 

  ```js
  import  { connect } from 'react-redux';
  ```

<b>5.1.</b> This will be how we tell react that this component will be connecting to our redux store

  ```js
  export default connect(mapStateToProps, mapDispatchToProps)(Todolist); 
  ```

  There are two methods used in the `connect()`:
  - `mapStateToProps` => used for getting and using state in this component
  - `mapDispatchToProps` => used for setting/changing state
  Use `null` if you aren't using `mapDispatchToProps` like this => `export default connect(mapStateToProps, null)(TodoList)`;

<b>5.2.</b> `mapStateToProps()` is a method that will inject redux from your redux store into your Props object. It returns an object. `store.todoReducer` referes to the key called `todoReducer` in the key-value pair we set up in the `./reducers/index.js` <b><i> `mapStateToProps` and `mapDispatchToProps` should always go outside of your react component </i></b>

```js

const mapStateToProps = (store) => ({
  addTodoItem: store.todoReducer
})
```
<b>5.3.</b> From now on we can refer to our redux state through our props object A.K.A this.props.todoState.savedTodoItems. You can test this out inside of `render()`

```js
console.log(this.props.todoState.savedTodoItems)
```

##### STEP 6

> <b> src/actions.js </b>

`touch actions.js`

<b>6.0.</b> Here we create our actions. It's okay to be confused at this point... trust me. Here is an analogy that can help understand what is happening here. You can think of the <b>action</b> as a box or a package that you want to deliver to your friend. Each <b>action AKA package</b> will have two things:
  - a type => you can think of this as a shipping label or address to mail the package to 
  - a payload => you can think of this as the contents of the package. Maybe books you want to mail to a friend. 
  - You can think of the <b>function</b>  in the <b>reducer</b> as the postoffice. It will then run specific logic based on the <b>action type AKA package label</b> provided. Just as how a post office would deliver a package to the correct address based on the shipping label provided. 

  ```js
  export const addTodoItem = (itemToAdd) => {
    return ({
      type: types.ADD_TODO_ITEM,
      payload: itemToAdd
    })
  }

  // another sample that is not implemented in our app yet 
  export const removeTodoItem = (itemToRemove) => {
    return({
      type: REMOVE_TODO_ITEM,
      payload: {itemToRemove}
    })
  }

  // next step => after setting up your action, 
  // go to the reducer (todoReducer.js) to split up the logic base
  // based on the action it receives 
  ```

##### STEP 7

> <b> src/reducers/todoReducer.js </b>

<b>7.0.</b> This function will be used to separate logic to change state based on the action this function receives. It is suggested to only use switch statements. (The switch statement will live inside of the `todoReducer()` function)

```js
    switch(action.type){
        case types.ADD_TODO_ITEM :
        
        savedTodoItems.push(action.payload)
        console.log("~~~~ Catch me at the todoReducer.js file ~~~")
        return {
            ...state,
            savedToDoItems,
        }

        default:
            return state;

    } 
}
```
##### STEP 8

> <b> components/TodoList.js </b>

<b>8.0.</b> Make sure to import the specific actions that this component will be using

  ```js
  import { addTodoItem } from '../actions';
  ```

<b>8.1.</b> In use `mapDispatchToProps` to inject actions into your props object. Dispatch is a method that will send this action to the reducer. Place the following code snippet above your class component.

  ```js

  const mapDispatchToProps = dispatch => ({
    addTodoItem: (itemToAdd) => dispatch(addTodoItem(itemToAdd))
  })
  ```

<b>8.2.</b> Now let's update our class component 
- Remove <b>this.state</b> from the constructor

  <details>
  <summary> Code Snippet </summary>

    ```js
    
    constructor(){
        super()
        this.submitForm = this.submitForm.bind(this)
    }

    ```
  
  </details>


- Update our submitForm method 

    <details>
    <summary>  Code Snippet </summary>

    ```js
    submitForm(event){
        event.preventDefault();

        // grab the input that the user typed in
        const inputtedItem = document.querySelector("#inputted-item");
        this.props.addToDoItem(inputtedItem.value)

    }
    ```
    </details>

- Render() listOfItems must also be updated
    <details>
    <summary>  Code Snippet </summary>

    ```js
    //-------------------------------------
    // Loop through all todo items in state (using map()) 
    // and render a <h5></h5> for each todo item
    //-------------------------------------

    // looping through the array in state
    const listOfItems =this.props.todoState.savedToDoItems.map((item, id)=>{
         return(<h5 key={id}>{item}</h5>)
    })
    ```
    </details>

##### STEP 9

> <b> src/actionTypes.js </b>

<b>9.0.</b> This file of `actionTypes` is just used as a means of triggering errors when we make typos ... This is better than using plain strings because at least misspelling a variable will throw an error. If you mispell a string the reducer will do nothing (no errors) because it won't see the correct action type.

```js
export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
```
<br>

> <b> src/actions.js </b>

```js
import * as types from "./actionTypes";

```
<br><br>

#### Great, now that we're done setting up our Redux store. Let's pass over the state to LastItemDisplay.js 

> <b>src/components/LastItemDisplay.js</b>

1. `import { connect } from 'react-redux;` 
2. We are going to mapStateToProps to our store 
    ```js
    const mapStateToProps = (store) => ({
      todoState: store.todoReducer
    })
    ```
3. Inside of `render()`
    ```js
        console.log("find me at last item display: ", this.props.todoState.savedToDoItems[this.props.todoState.savedToDoItems.length -1])
          // from updatedstate of savedtodoitems[-1] element and display here 
          const lastElementinTodo = this.props.todoState.savedToDoItems[this.props.todoState.savedToDoItems.length -1]
          return (
            <div id="last-item-display">
              The last item added goes in here: {lastElementinTodo}
            </div>
    ```
4. Don't forget to export mapStateToProps

    ```js
    export default connect(mapStateToProps,null)(LastItemDisplay);

    ```
