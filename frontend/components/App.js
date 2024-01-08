import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filterCompleted: false,
      inputValue: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        task: inputValue,
        completed: false,
      };
      this.setState({
        todos: [...todos, newTodo],
        inputValue: '',
      });
    }
  };

  handleToggleCompleted = (id) => {
    const updatedTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: updatedTodos });
  };

  handleClearCompleted = () => {
    const filteredTodos = this.state.todos.filter((todo) => !todo.completed);
    this.setState({ todos: filteredTodos });
  };

  render() {
    const { todos, filterCompleted, inputValue } = this.state;
    const filteredTodos = filterCompleted
      ? todos.filter((todo) => todo.completed)
      : todos;

    return (
      <div>
        <h1>Todo App</h1>
        <Form
          inputValue={inputValue}
          onInputChange={this.handleInputChange}
          onAddTodo={this.handleAddTodo}
          onClearCompleted={this.handleClearCompleted}
        />
        <TodoList todos={filteredTodos} onToggleCompleted={this.handleToggleCompleted} />
      </div>
    );
  }
}

export default App;