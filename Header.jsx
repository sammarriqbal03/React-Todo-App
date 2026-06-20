import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header({ theme, toggleTheme }) {
  return (
    <div className="header">
      <h1>✨ My To-Do App</h1>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}
