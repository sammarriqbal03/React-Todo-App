import { useState } from 'react';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';

export default function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim()) {
      editTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <span className={`priority ${todo.priority}`}>{todo.priority}</span>
      {isEditing ? (
        <button className="icon-btn" onClick={handleSave}><FaSave /></button>
      ) : (
        <button className="icon-btn" onClick={() => setIsEditing(true)}><FaEdit /></button>
      )}
      <button className="icon-btn" onClick={() => deleteTodo(todo.id)}><FaTrash /></button>
    </div>
  );
}
