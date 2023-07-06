
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p>"Gold Gym is the cleanest and most organized gym I’ve ever seen! I have no words to say how wonderful they are! Alex makes you feel super comfortable, Ryan helps you eat better and healthy! Fitness Within has a team of excellence! They have a place for anyone, a plan for any goal, everything is very flexible! I am extremely satisfied with Fitness Within and the entire team.
          On 1 to 10. They are 11🥇."</p>
          <h3>Christine D. </h3>
                           
          <p>Gym Member</p>
        </div>
        <div className="testimonial-card">
          <p>*"It has been almost one year and I have lost weight and increased my strength.  I find the coaches – so motivating and supportive.  During the shred I worked with Dave and he was very motivating and held me accountable.  The nutritional guidance and meal plans are easy to follow that is realistic and plenty of food. Everyone is extremely – REAL – supportive, FUN, KNOWLEDGABLE and challenging."</p>
          <h3>Jane Smith</h3>
          <p>Gym Member</p>
        </div>
        <div className="testimonial-card">
          <p>"For my birthday, my fiancé purchased the bootcamp service from Gold Gym. We were new to Reading and I wanted to find a new workout spot.  I am stronger than when I started and I love how every bootcamp is different.  Gold Gym is judgment free and I feel like everyone is a motivator.  I joined Shred Challenge III because I wanted to challenge myself with something different.  It was great to have everything laid out for us from the beginning.  It has helped me physically and mentally; I’m so lucky to have found Gold Gym."</p>
          <h3>Mike Johnson</h3>
          <p>Gym Member</p>
        </div>
        {/* Add more testimonial cards as needed */}
      </div>
    </section>
  );
};

export default TestimonialsSection;

