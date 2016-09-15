import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { updateText } from './Actions'
import previewer from './Reducers'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('updates state', () => {
  const state = {text: ""}
  expect(previewer(state, updateText("Hello World"))).toEqual({text: "Hello World"});
});
