import React from 'react';
import './TodoList.css';
import checkIcon from '../../resource/check.png';
import { changeStatus } from '../../actions'

export default class TotoItem extends React.Component
{

  handleComplete = () => {
    const { dispatch,item,idx } = this.props;
    dispatch(changeStatus(idx, !item.isCompleted));
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

