import React from 'react';

class Todo extends React.Component {
  render() {
    const { todo, onToggleCompleted } = this.props;

    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleCompleted(todo.id)}
        />
        {todo.task}
      </li>
    );
  }
}

export default Todo;