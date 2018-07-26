import { ADD_TODO, CHANGE_TODO_STATUS } from '../const/ActionTypes'

export function addTodo(id,text){
  return {
    type: ADD_TODO,
    id,
    text
  }
}

export function changeStatus(item){
  return {
    type: CHANGE_TODO_STATUS,
    item
  }
}