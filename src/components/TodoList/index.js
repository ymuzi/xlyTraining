import React from 'react';
import './TodoList.css';
import TotoItem from './TodoItem'

export default class TodoList extends React.Component {

  render() {
    const { list, todoActions } = this.props;
    if (!list) {
      return null;
    }
    return (
      <div>
        {list.map((item, idx) => {
          return <TotoItem key={idx} item={item} idx={idx} todoActions={todoActions}/>
        })}
      </div>
    );
  }
}
