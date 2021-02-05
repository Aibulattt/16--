import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import comment from './redusers/index';

import App from './container/app';
import './style.css';

const uuid =()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));


const initialState = [
           { 
            author: 'Name Author',
            text: 'Text comment',
            date: new Date().toLocaleString(),
            id: uuid()
        }
]

const loadState = JSON.parse(localStorage.getItem(('state'))) ? JSON.parse(localStorage.getItem(('state'))) : initialState;

const store = createStore(comment, loadState);

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})

ReactDom.render(
   <Provider store={store}> 
        <App />
   </Provider>,
    document.getElementById('root')
)