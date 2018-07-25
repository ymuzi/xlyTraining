import React from 'react';
import Todo from './container/Todo';
import './App.css';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './reducers'
import { createLogger } from 'redux-logger';
const logger = createLogger();


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
  )
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    )
  }
}
