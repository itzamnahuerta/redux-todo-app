import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
// 1. We need to import this Provider to "GIVE" our app access to redux state. 
// We do this using react-redux because this is a react application
import{ Provider } from 'react-redux';

// 1.5 Import store (which has not been created as of yet) but will be given to Provider as an attribute so our application can access it 😺
import store from "./store";

// Provider is just a component
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root')
);
