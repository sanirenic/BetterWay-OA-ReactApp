export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories
}) {
  return (
    <div className="filters">
      <input
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">Sort by price</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>

      <button onClick={() => {
        setSearch("");
        setCategory("all");
        setSort("");
      }}>
        Clear Filters
      </button>
    </div>
  );
}
