import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Filter from '../components/Filter';

export default class Todo extends React.Component {
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
    const newList = this.state.todoList.slice();
    newList.unshift({
      txt: txt,
      isCompleted: false
    })
    this.setState({
      todoList: newList
    });
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
    const list = this.state.filterCompleted
      ? this.getFilterList(this.state.todoList)
      : this.state.todoList;
    return (
      <div className="todo-ctn">
        <AddTodo onAddTodo={this.handleAddTodo} />
        <TodoList list={list} onTodoItemClick={this.handleTodoItemClick} />
        <Filter
          filterCompleted={this.state.filterCompleted}
          onFilterCompletedClick={this.handleFilterCompletedClick}
        />
      </div>
    );
  }
}
