import React from 'react';
import './TodoList.css';

import checkIcon from '../../resource/check.png';

export default class TodoList extends React.Component {
  handleComplete = (item, idx) => {
    const { onTodoItemClick } = this.props;
    onTodoItemClick(item, idx);
  }

  _renderTodoItem(item, idx) {
    if (item.isCompleted) {
      return (
        <div key={idx} className="item-ctn" onClick={() => this.handleComplete(item, idx)}>
          <div className="check-wrap check-completed">
            <img className="check-icon" src={checkIcon} />
          </div>
          <div className="todo-txt txt-completed">{item.txt}</div>
        </div>
      );
    }
    return (
      <div key={idx} className="item-ctn" onClick={() => this.handleComplete(item, idx)}>
        <div className="check-wrap" />
        <div className="todo-txt">{item.txt}</div>
      </div>
    );
  }

  render() {
    const { list } = this.props;
    if (!list) {
      return null;
    }
    return (
      <div>
        {list.map((item, idx) => {
          return this._renderTodoItem(item, idx)
        })}
      </div>
    );
  }
}
