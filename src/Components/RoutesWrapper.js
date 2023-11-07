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
  const userStatus = useSelector((state) => state.users.status);
  const { id } = useSelector((state) => state.users.user);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getExperiencesData());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (status === 'succeeded') {
      dispatch(getUserReservations(id));
    }
  });

  if (userStatus === 'Authenticated') {
    navigate('/login');
  }

  return (
    <Routes>
      <Route path="MainPage" element={<MainPage />} />
      <Route path="/experiences/:experienceID" element={<ExperienceCard />} />
      <Route path="/:experienceName/:experienceID" element={<ReservationForm />} />
      <Route path="/:userID/myReservations" element={<MyReservations />} />
    </Routes>
  );
}

export default RoutesWrapper;
