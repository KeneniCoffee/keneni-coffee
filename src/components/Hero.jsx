function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="eyebrow">Fresh coffee experience</p>
          <h1>KENANI COFFEE</h1>
          <p className="tagline">“Fresh Coffee. Warm Moments.”</p>
          <p className="hero-text">
            Enjoy freshly prepared coffee, delicious snacks, and a welcoming atmosphere at Kenani Coffee.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="primary-btn">
              Explore Menu
            </a>
            <a href="#payment" className="secondary-btn">
              Payment Information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
