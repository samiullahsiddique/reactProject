import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gymlogo from "./gymlogo.jpg";
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {

        setIsOpen(!isOpen);

    };
    const closeMenu = () => {

        setIsOpen(false);

    };

 

    return (
        <nav className=" navbar navbar-expand-lg navbar-light ">
            <div className="container mx-2" style={{maxWidth:'1600px'}}>
                <Link to="/" className="navbar-brand">
                    <img src={gymlogo} alt='Logo' />
                </Link>
                <button
                    
                className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`}

                    type="button"

                    data-toggle="collapse"

                    data-target="#navbarNav"

                    aria-controls="navbarNav"

                    aria-expanded={isOpen}

                    aria-label="Toggle navigation"

                    onClick={toggleMenu}
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <Link to="/HeroSection" className="nav-link" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AboutSection" className="nav-link" onClick={closeMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ContactSection" className="nav-link" onClick={closeMenu}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/TrainerSection" className="nav-link" onClick={closeMenu}>Trainers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/TestimonialsSection" className="nav-link" onClick={closeMenu}>Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ClassesSection" className="nav-link" onClick={closeMenu}>Classes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/PricingSection" className="nav-link" onClick={closeMenu}>Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="btn btn-warning" onClick={closeMenu}>Sign In </Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
};
 export default Navbar;