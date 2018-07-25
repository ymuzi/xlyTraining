import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Filter from '../components/Filter';
import { connect } from 'react-redux'
import { addTodo as AddTodoCreator } from '../actions'

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [{
        txt: 'sad',
        isCompleted: false
      }, {
        txt: 'ppppp',
        isCompleted: false
      }],

      filterCompleted: false
    };
  }

  getFilterList = list => {
    return list.filter(item => item.isCompleted)
  }

  handleAddTodo = txt => {
    const { dispatch } = this.props;
    const action = AddTodoCreator(txt);
    dispatch(action);
    // const newList = this.state.todoList.slice();
    // newList.unshift({
    //   txt: txt,
    //   isCompleted: false
    // })
    // this.setState({
    //   todoList: newList
    // });
  }

  handleTodoItemClick = (item, idx) => {
    const newTodoList = this.state.todoList.slice();
    newTodoList[idx].isCompleted = !newTodoList[idx].isCompleted;
    this.setState({
      todoList: newTodoList
    });
  }

  handleFilterCompletedClick = () => {
    this.setState({
      filterCompleted: !this.state.filterCompleted
    });
  }

  render() {
    const { dispatch } = this.props;
    const list = this.state.filterCompleted
      ? this.getFilterList(this.props.list)
      : this.props.list;
    return (
      <div className="todo-ctn">
        <AddTodo dispatch={dispatch} />
        <TodoList list={list} dispatch={dispatch}/>
        <Filter
          filterCompleted={this.state.filterCompleted}
          onFilterCompletedClick={this.handleFilterCompletedClick}
        />
      </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  // state.list;
  const props = { list:null };
  props.list = state.list;
  return props;
}

export default connect(mapStateToProps)(Todo);