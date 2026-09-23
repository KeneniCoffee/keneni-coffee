import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Payment from './components/Payment';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Payment />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
