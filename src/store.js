// 2. our store.js was created inside of our /src folder

// 2.1 createStore function will create our redux store
import { createStore } from 'redux';
//2.2 We haven't made this folder&file yet but we need to import our reducers located within ./reducers/index.js which is compiling all of our reducers to one file, to then be passed to createStore function (behind the scenes beautifying it). We then have it stored inside our variable `store` which is then passed on to our Provider component in index.js
import reducers from './reducers/index';

const store = createStore(reducers);

export default store;

// next step -> create our reducers folder and files