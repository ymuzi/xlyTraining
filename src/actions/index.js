import { ADD_TODO, CHANGE_TODO_STATUS } from '../const/ActionTypes'

export function addTodo(text){
  return {
    type: ADD_TODO,
    text
  }
}

export function changeStatus(idx, isCompleted){
  return {
    type: CHANGE_TODO_STATUS,
    idx,
    isCompleted
  }
}