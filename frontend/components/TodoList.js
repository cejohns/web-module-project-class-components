import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const { todos, onToggleCompleted } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onToggleCompleted={onToggleCompleted} />
        ))}
      </ul>
    );
  }
}

export default TodoList;