
import './ClassesSection.css';

const ClassesSection = () => {
  return (
    <section className="classes">
      <h2>Classes</h2>
      <div className="class-grid">
        <div className="class-card">
          <h3>Strength Training</h3>
          <p>Strength training (also known as resistance exercise) increases muscle strength by making muscles work against a weight or force. Resistance exercise is considered a form of anaerobic exercise.</p>
        </div>
        <div className="class-card">
          <h3>Cardio </h3>
          <p>Cardiovascular exercise is exercise that gets your heart rate up. Though some people use it solely for weight loss, cardio has other benefits as well. There are a wide variety of cardiovascular exercises, but consistency, duration, and intensity are the most important factors for meeting your fitness goals.</p>
        </div>
        <div className="class-card">
          <h3>Zumba</h3>
          <p>Zumba is a fitness program that involves cardio and Latin-inspired dance. It was founded by Colombian dancer and choreographer Beto Pérez in 2001, It currently has 200,000 locations, with 15 million people taking classes weekly, and is located in 180 countries.</p>
        </div>
        {/* Add more class cards as needed */}
      </div>
    </section>
  );
};

export default ClassesSection;
