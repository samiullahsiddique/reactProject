import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ClassesSection from './components/ClassesSection';
import TrainersSection from './components/TrainersSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SignIn from './components/Signin';
import SignUp from './components/SignUp';



function App() {
  return (
    <div>

      <Router>
        <Navbar />
        
          <Switch>
          <Route exact path="/" component={HeroSection} />
          <Route path="/herosection" component={HeroSection} />
          <Route path="/aboutsection" component={AboutSection} />
          <Route path="/contactsection" component={ContactSection} />
          <Route path="/trainersection" component={TrainersSection} />
          <Route path="/testimonialssection" component={TestimonialsSection} />
          <Route path="/classessection" component={ClassesSection} />
          <Route path="/pricingsection" component={PricingSection} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          </Switch>
      </Router>
      

      <Footer />


    </div>
  );

}

export default App;

