import React from 'react';
import Todo from './container/Todo';
import './App.css';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk, logger),
  )
);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
