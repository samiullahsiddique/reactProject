
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import gymlogo from "./gymlogo.jpg"

// const Navbar = () => {
//     return (
//         <nav>
//             <div className="logo">
//                 <img src={gymlogo} alt='Logo' />
//             </div>
//             <div className="links">
//                 <Link to="/HeroSection">Home</Link>
//                 <Link to="/AboutSection">About</Link>
//                 <Link to="/ContactSection">Contact</Link>
//                 <Link to="/TrainerSection">Trainers</Link>
//                 <Link to="/TestimonialsSection">Testimonials</Link>
//                 <Link to="/ClassesSection">Classes</Link>
//                 <Link to="/PricingSection">Pricing</Link>
//             </div>
//             <div className="auth-buttons">
//                 <button ><Link to="/signin" className="link" style={{textDecoration: 'none',color:'black'}}>Sign In</Link></button>
//                 <button>Register</button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gymlogo from "./gymlogo.jpg";
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <div className="logo">
                <img src={gymlogo} alt='Logo' />
            </div>
            <div className={`links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/HeroSection">Home</Link>
                <Link to="/AboutSection">About</Link>
                <Link to="/ContactSection">Contact</Link>
                <Link to="/TrainerSection">Trainers</Link>
                <Link to="/TestimonialsSection">Testimonials</Link>
                <Link to="/ClassesSection">Classes</Link>
                <Link to="/PricingSection">Pricing</Link>
                
            </div>
            <div className="auth-buttons">
                <button><Link to="/signin">Sign In</Link></button>
                <button>Register</button>
            </div>
            
            <div className="hamburger-menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import gymlogo from "./gymlogo.jpg";
// import './Navbar.css';

// const Navbar = () => {
// const [isMenuOpen, setIsMenuOpen] = useState(false);

// const toggleMenu = () => {
// setIsMenuOpen(!isMenuOpen);
// };

// return (
// <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
// <div className="logo">
// <img src={gymlogo} alt='Logo' />
// </div>
// <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
// <div className="links">
// <Link to="/HeroSection">Home</Link>
// <Link to="/AboutSection">About</Link>
// <Link to="/ContactSection">Contact</Link>
// <Link to="/TrainerSection">Trainers</Link>
// <Link to="/TestimonialsSection">Testimonials</Link>
// <Link to="/ClassesSection">Classes</Link>
// <Link to="/PricingSection">Pricing</Link>
// </div>
// <div className="auth-buttons">
// <button><Link to="/signin">Sign In</Link></button>
// <button>Register</button>
// </div>
// </div>
// <div className="hamburger-menu" onClick={toggleMenu}>
// <span></span>
// <span></span>
// <span></span>
// </div>
// </nav>
// );
// };

// export default Navbar;