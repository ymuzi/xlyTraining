import * as ActionTypes from '../const/ActionTypes'

const init_state = { list: [
  {id: 1,text:'123',isCompleted: false},
  {id: 2,text:'456',isCompleted: false},
  {id: 3,text:'789',isCompleted: true}
] }

export default function allList(state = init_state, action){
  switch(action.type){
    case ActionTypes.ADD_TODO:{
      const { id, text } = action;
      const newState = {...state};
      const newList = [...newState.list];
      newList.unshift({
        id,
        text,
        isCompleted: false
      });
      newState.list = newList;
      return newState;
    }
    case ActionTypes.CHANGE_TODO_STATUS: {
      const { item } = action;
      const newState = {...state};
      const newList = [...newState.list];
      let needChangeIndex = -1;
      // 在列表中查找要改变的位置
      state.list.forEach((el,index) => {
        if(el.id === item.id){
          needChangeIndex = index;
        }
      });

      if(needChangeIndex !== -1){//如果找到了就改变相应位置的对象
        newList[needChangeIndex] = { ...item, isCompleted: !item.isCompleted }
      }
      newState.list = newList;
      return newState;
    }
    default:
      return state;
  }
}