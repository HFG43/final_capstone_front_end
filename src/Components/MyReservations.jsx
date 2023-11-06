import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReservationCard from './ReservationCard';
import { myReservationInfo } from '../logic/formatObjects';

function MyReservations() {
  const urldata = useParams();
  const { currentReservations } = useSelector((state) => state.reservations);
  const { experiences } = useSelector((state) => state.experiences);

  const myReservations = currentReservations.map((reserve) => {
    const currentExperience = experiences.filter(
      (experience) => experience.id === reserve.experience_id,
    );
    return myReservationInfo(currentExperience[0], reserve, parseInt(urldata.userID, 10));
  });

  if (myReservations.length !== 0) {
    return (
      <section className="mine-cont d-flex-col gap">
        <h2 className="title-form mt mb">My reservations</h2>
        <div className="d-flex card-reserv-cont gap grid">
          {myReservations.map((reservation) => (
            <ReservationCard key={reservation.id} reservArr={reservation} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mine-cont d-flex-col gap">
      <h2 className="title-form mt mb">My reservations</h2>
      <span className="non-reserve mt">No reservations yet</span>
    </section>
  );
}

export default MyReservations;
