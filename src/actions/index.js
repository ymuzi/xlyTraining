import * as ActionTypes from '../const/ActionTypes'

export function AddTodo(text){
  return {
    type: ActionTypes.ADD_TODO,
    text
  }
}