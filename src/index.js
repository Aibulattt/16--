import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import comment from './redusers/index';

import App from './container/app';
import './style.css';

const initialState = [
           { 
            author: 'Name Author',
            text: 'Text comment',
            date: new Date().toLocaleString(),
            counterLikes: 0,
            counterDislikes: 0,
            id: 1       
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