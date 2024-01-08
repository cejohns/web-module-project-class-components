import React from 'react';

class Form extends React.Component {
  render() {
    const { inputValue, onInputChange, onAddTodo, onClearCompleted } = this.props;

    return (
      <div>
        <input type="text" value={inputValue} onChange={onInputChange} />
        <button onClick={onAddTodo}>Add Todo</button>
        <button onClick={onClearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default Form;