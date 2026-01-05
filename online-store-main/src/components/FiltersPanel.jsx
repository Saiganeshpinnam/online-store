export default function FiltersPanel({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sort,
  setSort
}) {
  return (
    <aside className="filters">
      <h2 className="filters-title">Filters</h2>

      <div className="filter-section">
        <h3 className="filter-label">Categories</h3>
        <ul className="filter-list">
          <li>
            <label>
              <input
                type="radio"
                name="category"
                value="all"
                checked={selectedCategory === 'all'}
                onChange={() => setSelectedCategory('all')}
              />
              All Products
            </label>
          </li>

          {categories.map(cat => (
            <li key={cat}>
              <label>
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-section">
        <h3 className="filter-label">Price Range</h3>
        <div className="price-inputs">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={e => setPriceRange(Number(e.target.value))}
          />
          <span className="price-value">${priceRange}</span>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-label">Sort By</h3>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="sort-select"
        >
          <option value="featured">Featured</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>
    </aside>
  )
}
