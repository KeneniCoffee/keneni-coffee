function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
            alt="Kenani Coffee interior"
          />
        </div>

        <div className="about-content">
          <p className="eyebrow dark">About Kenani Coffee</p>
          <h2 className="section-title">A warm place for coffee lovers</h2>
          <p>
            Kenani Coffee is a welcoming coffee shop dedicated to serving freshly prepared coffee, drinks,
            snacks, and delicious food in a comfortable environment.
          </p>

          <div className="about-details">
            <div>
              <h4>Opening Hours</h4>
              <p>Monday – Sunday</p>
              <p>8:00 AM – 9:00 PM</p>
            </div>
            <div>
              <h4>Location</h4>
              <p>Robe, Ethiopia</p>
            </div>
            <div>
              <h4>Contact</h4>
              <p>0912101721</p>
              <p>kenenicoffee1@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
