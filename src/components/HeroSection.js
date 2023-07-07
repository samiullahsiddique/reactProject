
import './HeroSection.css';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Gold Gym's Website</h1>
        <p>Discover the amazing features of our services.</p>
        <button><Link to="/aboutsection" style={{textDecoration: 'none',color:'black'}}>Learn More</Link></button>
      </div>
    </section>
  );
};

export default HeroSection;
