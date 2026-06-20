import TodoItem from './TodoItem';

export default function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  if (todos.length === 0) {
    return <div className="empty">📭 No tasks found. Add one!</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}
