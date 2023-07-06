
import './PricingSection.css';

const PricingSection = () => {
  return (
    <section className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-plans">
        <div className="pricing-plan">
          <h3>Basic</h3>
          <p>₹699/month</p>
          <ul>
            <li>Access to gym facilities</li>
            <li>Group fitness classes</li>
            <li>No commitment</li>
          </ul>
          <button>Sign Up</button>
        </div>
        <div className="pricing-plan">
          <h3>Standard</h3>
          <p>₹999/month</p>
          <ul>
            <li>Access to gym facilities</li>
            <li>Group fitness classes</li>
            <li>Personal training sessions</li>
          </ul>
          <button>Sign Up</button>
        </div>
        <div className="pricing-plan">
          <h3>Premium</h3>
          <p>₹1299/month</p>
          <ul>
            <li>Access to gym facilities</li>
            <li>Group fitness classes</li>
            <li>Personal training sessions</li>
            <li>Access to swimming pool</li>
            <li>24/7 gym access</li>
          </ul>
          <button>Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

