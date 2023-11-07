import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../Style/myReservation.css';
import { getExperiencesData } from '../Redux/Slices/ExperiencesSlice';
import { getUserReservations } from '../Redux/Slices/reservationsSlice';
import MainPage from './MainPage';
import ReservationForm from './ReservationForm';
import MyReservations from './MyReservations';
import ExperienceCard from './ExperienceCard';

function RoutesWrapper() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.experiences.status);
  const userStore = useSelector((state) => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getExperiencesData());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (status === 'succeeded') {
      dispatch(getUserReservations(userStore.user.id));
    }
  }, [dispatch, status, userStore.user.id]);

  useEffect(() => {
    if (userStore.status !== 'Authenticated') {
      navigate('/');
    }
  }, [navigate, userStore.status]);

  return (
    <Routes>
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/experiences/:experienceID" element={<ExperienceCard />} />
      <Route path="/:experienceName/:experienceID" element={<ReservationForm />} />
      <Route path="/:userID/myReservations" element={<MyReservations />} />
    </Routes>
  );
}

export default RoutesWrapper;
