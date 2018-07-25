import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Filter from '../components/Filter';
import { connect } from 'react-redux';

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


  handleTodoItemClick = (item, idx) => {
    // const newTodoList = this.state.todoList.slice();
    // newTodoList[idx].isCompleted = !newTodoList[idx].isCompleted;
    // this.setState({
    //   todoList: newTodoList
    // });
  }

  handleFilterCompletedClick = () => {
    this.setState({
      filterCompleted: !this.state.filterCompleted
    });
  }

  render() {
    const list = this.state.filterCompleted
      ? this.getFilterList(this.props.list)
      : this.props.list;
    return (
      <div className="todo-ctn">
        <AddTodo dispatch={this.props.dispatch} />
        <TodoList list={list} onTodoItemClick={this.handleTodoItemClick} />
        <Filter
          filterCompleted={this.state.filterCompleted}
          onFilterCompletedClick={this.handleFilterCompletedClick}
        />
      </div>
    );
  }
}


function mapStateToProps(state,ownProps){
  return {list: state.list};
}

export default connect(mapStateToProps)(Todo);