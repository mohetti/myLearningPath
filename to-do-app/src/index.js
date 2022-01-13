import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './app/store';
import { Provider } from 'react-redux';

const saveState = (state) => {
  try {
    const serialState = JSON.stringify(state.todoactions);
    localStorage.setItem('todos', serialState);
  } catch (err) {
    console.log(err);
  }
};

store.subscribe(() => {
  saveState({
    todoactions: store.getState().todoactions.value,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
