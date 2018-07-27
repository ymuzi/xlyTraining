import { ADD_TODO, CHANGE_TODO_STATUS } from '../const/ActionTypes'

export function addTodo(text){
  return {
    type: ADD_TODO,
    API: {
      params: { text },
      endPoint: 'test'
    }
  }
}

export function changeStatus(item){
  return {
    type: CHANGE_TODO_STATUS,
    item
  }
}