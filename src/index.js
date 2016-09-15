import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore } from 'redux'
import previewer from './Reducers'
import { Provider } from 'react-redux'
import { updateText } from './Actions'
import example from './exampleMarkDown'

let store = createStore(previewer);
store.dispatch(updateText(example));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
