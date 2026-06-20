import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  const addTodo = (text, priority) => {
    setTodos([...todos, { id: Date.now(), text, completed: false, priority }]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  const toggleTodo = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const editTodo = (id, newText) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));

  const clearCompleted = () => setTodos(todos.filter((t) => !t.completed));

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const filteredTodos = todos
    .filter((t) =>
      filter === 'active' ? !t.completed : filter === 'completed' ? t.completed : true
    )
    .filter((t) => t.text.toLowerCase().includes(search.toLowerCase()));

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <TodoForm addTodo={addTodo} />
      <Filters
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
        clearCompleted={clearCompleted}
      />
      <div className="stats">
        <span>📋 Total: {todos.length}</span>
        <span>✅ Done: {completedCount}</span>
        <span>⏳ Left: {todos.length - completedCount}</span>
      </div>
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
}
