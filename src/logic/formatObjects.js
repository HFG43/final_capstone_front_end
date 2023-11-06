import { dateFormat } from './getDate';

const user = (userName, nickname) => ({
  name: userName,
  username: nickname,
});

export const reservation = (userID, experienceID, reserveDate, reserveCity) => ({
  user_id: userID,
  experience_id: experienceID,
  date: reserveDate,
  city: reserveCity,
});

export const cancelReservation = (userID, reservationID) => ({
  user_id: userID,
  id: reservationID,
});

export const myReservationInfo = (experience, reservation, userID) => ({
  user_id: userID,
  image: experience.image,
  reserve_id: reservation.id,
  experience_name: experience.name,
  experience_desc: experience.description,
  city: reservation.city,
  date: dateFormat(reservation.date),
});

export default user;
