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

export default user;
