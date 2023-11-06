import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import CurrentDate from '../logic/getDate';
import { reservation } from '../logic/formatObjects';
import { createReservation } from '../Redux/Slices/reservationsSlice';

const ReservationForm = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);
  const { experienceID } = useParams();
  const { experiences } = useSelector((state) => state.experiences);
  const selectedExperience = experiences.filter(
    (experience) => experience.id === parseInt(experienceID, 10),
  );

  const CreateReservation = (e) => {
    const btn = e.target;
    const dataForm = btn.parentElement;
    const city = dataForm.querySelector('#city');
    const date = dataForm.querySelector('#date');
    const msg = dataForm.querySelector('#message-error');

    if (date.value === '' || city.value === '') {
      msg.textContent = 'Fill out all the fields please';
    } else {
      const response = dispatch(createReservation(
        reservation(user.id, experienceID, date.value, city.value),
      ));

      response.then((data) => {
        if (typeof data.payload !== 'object') {
          msg.textContent = 'Something went wrong, please try again later';
        } else {
          msg.textContent = 'Reservation created successfully';
          city.value = '';
          date.value = '';
        }
      });
    }
  };

  return (
    <section className="image-back d-flex-col reserv-back">
      <div className="d-flex-col form-cont gap">
        <h2 className="title-form title-reserv color">
          Book
          {' '}
          {selectedExperience[0].name}
        </h2>
        <span className="d-flex reserv-desc span-desc">{selectedExperience[0].description}</span>
        <form className="d-flex-col gap" onSubmit={(ev) => ev.preventDefault()}>
          <span id="message-error" />
          <input id="city" type="text" placeholder="City" className="form-input reserv-input" required />
          <input id="date" type="datetime-local" min={CurrentDate()} max="2023-12-31 18:00" className="form-input reserv-input" required />
          <input type="submit" className="form-submit d-flex-col" onClick={(e) => CreateReservation(e)} value="Register" />
          <Link to="/MainPage" className="form-submit d-flex-col">Main page</Link>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
