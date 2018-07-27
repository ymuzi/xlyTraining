import React from 'react';
import Todo from './container/Todo';
import './App.css';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './reducers'
import { createLogger } from 'redux-logger';
const logger = createLogger();


const APIService = store => next => action => {
  console.log(action);
  const { API } = action;
  if(API){

    const { params, endPoint } = API;
    const reqAction = { 
      type:`${action.type}_REQ`
    }
    next(reqAction)
    if( params && endPoint) {//网络模拟
      if(params.text.startsWith('5')){
        const failAction = { 
          type:`${action.type}_FAI`,
          message:'Todo 描述不能以5开通'
        }
        next(failAction);
      }else{
        setTimeout(() => {
          const sucAction = { 
            type:`${action.type}_SUC`,
            response:{
              id: (new Date()).getTime(),
              text: params.text,
              isCompleted: false
            }
          }
          next(sucAction);

        }, 3000);
      }
    }else{//失败，发送失败的action
      const failAction = { 
        type:`${action.type}_FAI`,
        message:'params 或者 endpoint 不可用'
      }
      next(failAction);
    }

  } else {
    next(action);
  }
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(APIService,logger),
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
