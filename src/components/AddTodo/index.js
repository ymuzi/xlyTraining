import React from 'react';
import './AddTodo.css';
import { addTodo } from '../../actions'

const KEY_RETURN = 13;

export default class AddTodo extends React.Component {
  constructor() {
    super();
    this.inputValue = '';
  }

  handleInputChange = e => {
    this.inputValue = e.target.value;
  }

  listenReturnKeyDown = e => {
    if (e.keyCode === KEY_RETURN) {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    if (!this.inputValue) {
      return;
    }
    const { todoActions } = this.props;
    todoActions.addTodo((new Date()).getTime() ,this.inputValue);
    
    this.inputValue = '';
  }

  render() {
    return (
      <div className="add-ctn">
        <div className="add-input-ctn">
          <input
            className="add-input"
            placeholder="写下你的Todo后，按回车键添加"
            onChange={this.handleInputChange}
            onKeyDown={this.listenReturnKeyDown}
          />
        </div>
      </div>
    );
  }
}
