import { ADD_TODO, CHANGE_TODO_STATUS } from '../const/ActionTypes'

export default function todoList(state = { list: []},action){
  switch(action.type){
    case ADD_TODO:{
      const newList = state.list.slice();
      newList.unshift({
        text: action.text,
        isComplated: false
      });
      const newState = { ...state };
      newState.list = newList;
      return newState;
    }
    case CHANGE_TODO_STATUS: {
      const newList = state.list.slice();
      const { idx, isCompleted } = action;
      newList[idx] = {...newList[idx], isCompleted };
      const newState = { ...state };
      newState.list = newList;
      return newState;
    }
    default:
    return state;
  }
}