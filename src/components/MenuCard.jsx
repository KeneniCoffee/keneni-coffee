function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <div className="menu-image-wrap">
        <img src={item.image} alt={item.name} className="menu-image" />
        {item.popular && <span className="popular-badge">Popular</span>}
        {item.comingSoon && <span className="popular-badge coming-soon">Coming Soon</span>}
      </div>
      <div className="menu-body">
        <div className="menu-meta">
          <h3>{item.name}</h3>
          <span className="price">{item.comingSoon ? 'Coming Soon' : `${item.price} ETB`}</span>
        </div>
        <p className="menu-desc">{item.description}</p>
      </div>
    </article>
  );
}

export default MenuCard;
