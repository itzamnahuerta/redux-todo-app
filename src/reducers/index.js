// reducers folder created inside of /src

// 3) We import the combineReducers() function from redux to combine the reducers of our application into one
import { combineReducers } from 'redux';
import todoReducer from './todoReducers';

// 3.1) This function combineReducers takes in an object. This object will have all of the reducers you choose to create for your app. The keys can be named anything but the value should coorespond to the correct reducer file

const reducers = combineReducers({
    todoReducer: todoReducer
})

export default reducers;