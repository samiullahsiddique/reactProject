
import './TrainersSection.css';

const TrainersSection = () => {
  return (
    <section className="trainers">
      <h2>Our Trainers</h2>
      <div className="trainer-grid">
        <div className="trainer-card">
          <img src="https://img.freepik.com/premium-photo/smiling-man-practice-room_741371-51.jpg" alt="Trainer" />
          <h3>Alex Coolin</h3>
          <p>Strength and conditioning coach,
         
          </p>
        </div>
        <div className="trainer-card">
          <img src="https://img.freepik.com/free-photo/stylish-guy-gym-posing-photo_78826-3049.jpg?size=626&ext=jpg" alt="Trainer" />
          <h3>Ryan Gosling</h3>
          <p>Group exercise instructor</p>
        </div>
        <div className="trainer-card">
          <img src="https://img.freepik.com/free-photo/young-handsome-man-sportswear-gym_1303-20729.jpg?size=626&ext=jpg" alt="Trainer" />
          <h3>Chris Jordan</h3>
          <p> Weight loss transformation specialist</p>
        </div>
        {/* Add more trainer cards as needed */}
      </div>
    </section>
  );
};

export default TrainersSection;
