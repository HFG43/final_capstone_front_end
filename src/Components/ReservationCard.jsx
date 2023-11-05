import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../Redux/Slices/reservationsSlice';
import { cancelReservation } from '../logic/formatObjects';

function ReservationCard({ reservArr }) {
  const dispatch = useDispatch();
  return (
    <div className="reserv-card d-flex-col gap">
      <img className="reserv-img" src={reservArr.image} alt={reservArr.experience_name} />
      <h3 className="m0">{reservArr.experience_name}</h3>
      <span>{reservArr.experience_desc}</span>
      <div className="d-flex gap">
        <span>{reservArr.city}</span>
        <span>{reservArr.date}</span>
      </div>
      <button className="btn-cancel" type="button" onClick={() => dispatch(deleteReservation(cancelReservation(reservArr.user_id, reservArr.reserve_id)))}>Cancel reservation</button>
    </div>
  );
}

ReservationCard.propTypes = {
  reservArr: PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    reserve_id: PropTypes.number.isRequired,
    experience_name: PropTypes.string.isRequired,
    experience_desc: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReservationCard;
