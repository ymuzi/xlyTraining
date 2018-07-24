import React from 'react';
import './AddTodo.css';

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
    const { onAddTodo } = this.props;
    if (!this.state.inputValue) {
      return;
    }
    onAddTodo(this.state.inputValue);

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
