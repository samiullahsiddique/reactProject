
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 >Gold Gym</h3>
          <p>Sinhagad Road , Pune ,India</p>
          <p>https://goldsgym.in/</p>
          <p>8298634722</p>
        </div>
        <div className="footer-right">
         
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gold Gym. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
