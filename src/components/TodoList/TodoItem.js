import React from 'react';
import './TodoList.css';
import checkIcon from '../../resource/check.png';

export default class TotoItem extends React.Component
{

  handleComplete = () => {
    const { todoActions, item } = this.props;
    todoActions.changeStatus(item);
  }

  render(){
    const {item,idx} = this.props;
    
    if (item.isCompleted) {
      return (
        <div key={idx} className="item-ctn" onClick={() => this.handleComplete(item, idx)}>
          <div className="check-wrap check-completed">
            <img className="check-icon" src={checkIcon} />
          </div>
          <div className="todo-txt txt-completed">{item.text}</div>
        </div>
      );
    }

    return (
      <div key={idx} className="item-ctn" onClick={() => this.handleComplete(item, idx)}>
        <div className="check-wrap" />
        <div className="todo-txt">{item.text}</div>
      </div>
    );

  }
}

