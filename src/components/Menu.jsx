import { useMemo, useState } from 'react';
import MenuCard from './MenuCard';
import menuItems, { categories } from '../data/menuData';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery =
        normalizedQuery === '' ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  return (
    <section id="menu" className="menu-section section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow dark">Our menu</p>
          <h2 className="section-title">Coffee, bites, and warm favorites</h2>
        </div>

        <div className="menu-tools">
          <label className="search-box" aria-label="Search menu items">
            <input
              type="text"
              placeholder="Search menu items..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        <div className="category-tabs" aria-label="Menu categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={selectedCategory === category ? 'category-btn active' : 'category-btn'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <MenuCard key={item.id} item={item} />)
          ) : (
            <div className="empty-state">
              <p>No menu items match your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Menu;
