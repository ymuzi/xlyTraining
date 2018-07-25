import * as ActionTypes from '../const/ActionTypes';


export default function(state = { list: [] } ,action){
  switch(action.type){
    case ActionTypes.ADD_TODO:
    {
      const newList = state.list.slice();
      newList.unshift({
        text: action.text,
        isComplated: false
      })
      return {
        list: newList
      }
    }
    default:
      return state;
  }
}