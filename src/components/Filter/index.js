import React from 'react';
import './Filter.css';

export default class Filter extends React.Component {

  render() {
    const { filterCompleted, onFilterCompletedClick } = this.props;
    return (
      <div
        className="switch-bar"
        onClick={onFilterCompletedClick}
      >
        {filterCompleted ? '显示全部事项' : '只显示已完成事项'}
      </div>
    );
  }
}
