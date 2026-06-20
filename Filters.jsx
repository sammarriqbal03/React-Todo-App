export default function Filters({ filter, setFilter, search, setSearch, clearCompleted }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="🔍 Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={clearCompleted}>Clear Done</button>
    </div>
  );
}
