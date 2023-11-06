import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Style/register.css';
import './Style/medias.css';
import './Style/myReservation.css';
import { getExperiencesData } from './Redux/Slices/ExperiencesSlice';
import { loadUserFromLocalStorage } from './Redux/Slices/usersSlice';
import { getUserReservations } from './Redux/Slices/reservationsSlice';
import MainPage from './Components/MainPage';
import Register from './Components/Register';
import ReservationForm from './Components/ReservationForm';
import MyReservations from './Components/MyReservations';

function RoutesWrapper() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.experiences.status);
  const { id } = useSelector((state) => state.users.user);

  useEffect(() => {
    if (status === 'idle') {
      // Set user infromation from localStorage
      dispatch(loadUserFromLocalStorage());
      dispatch(getExperiencesData());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (status === 'succeeded') {
      dispatch(getUserReservations(id));
    }
  });

  if(/*not login*/)
    return <Redirect to="/login" />

  return (
    // <div className="Routes" />
    <Routes>
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/:experienceName/:experienceID" element={<ReservationForm />} />
      <Route path="/:userID/myReservations" element={<MyReservations />} />
    </Routes>
  );
}

export default RoutesWrapper;
