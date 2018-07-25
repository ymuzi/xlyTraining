import React from 'react';
import './AddTodo.css';
import { addTodo } from '../../actions'

const KEY_RETURN = 13;

export default class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  }

  listenReturnKeyDown = e => {
    if (e.keyCode === KEY_RETURN) {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    if (!this.state.inputValue) {
      return;
    }
    const { dispatch } = this.props;
    const action = addTodo(this.state.inputValue);
    dispatch(action);
    
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <div className="add-ctn">
        <div className="add-input-ctn">
          <input
            className="add-input"
            value={this.state.inputValue}
            placeholder="写下你的Todo后，按回车键添加"
            onChange={this.handleInputChange}
            onKeyDown={this.listenReturnKeyDown}
          />
        </div>
      </div>
    );
  }
}
