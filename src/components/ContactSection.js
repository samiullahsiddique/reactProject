
import './ContactSection.css';


const ContactSection = () => {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-details">
          <h3>Location</h3>
          <p>Sinhagad Road, Pune, India</p>
        </div>
        <div className="contact-details">
          <h3>Email</h3>
          <p>Wecare@goldsgym.in</p>
        </div>
        <div className="contact-details">
          <h3>Phone</h3>
          <p>8298634722</p>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>
        <div>
        <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;


