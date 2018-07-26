import * as ActionTypes from '../const/ActionTypes'


const init_state = { list: [
  {id:3 , text:'789',isCompleted: true}
] }

export default function compList(state = init_state, action){
  switch(action.type){
    case ActionTypes.CHANGE_TODO_STATUS: {
      const { item } = action;
      let needChangeIndex = -1;
      // 在列表中查找要改变的位置
      state.list.forEach((el,index) => {
        if(el.id === item.id){
          needChangeIndex = index;
        }
      });

      //复制一份新的state 以及 list
      const newState = {...state};
      const newList = [...newState.list];

      if(needChangeIndex !== -1){//如果找到了，替换这个位置上的item为新的
        if(item.isCompleted){// 如果item是已经完成，则需要把这个item去掉
          newList.splice(needChangeIndex,1);
        }
      }else{// 没有找到，添加到最顶端
        if(!item.isCompleted){//如果给我的item是未完成，同时在列表中没找到，则需要添加进列表
          newList.unshift({...item, isCompleted:true});
        }
      }

      newState.list = newList;
      return newState;
    }
    default:
      return state;// init_state
  }
}