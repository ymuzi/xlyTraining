import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Filter from '../components/Filter';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../actions'

class Todo extends React.Component {
  constructor() {
    super();
  }

  getFilterList = list => {
    return list.filter(item => item.isCompleted)
  }

  renderRequestWaiting(){
    const { allList } = this.props;
    if(allList.isFetching){
      return <div >网络请求中</div>
    }
  }

  renderErrorMessage(){
    const { allList } = this.props;
    if(allList.errorMessage){
      return <div>{allList.errorMessage}</div>
    }
  }

  render() {
    const { todoActions } = this.props;
    const { allList, compList } = this.props;
    return (
      <div className="todo-ctn">
        { this.renderRequestWaiting() }
        { this.renderErrorMessage() }
        <AddTodo todoActions={todoActions} />
        <TodoList list={allList.list} todoActions={todoActions}/>
        <hr />
        <TodoList list={compList.list} todoActions={todoActions}/>        
      </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  // state.list;
  const { allList, compList } = state;
  return { allList, compList };
}

function mapDispatchToProps(dispatch){
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);