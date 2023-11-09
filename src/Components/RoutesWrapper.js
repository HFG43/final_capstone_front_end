import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Routes, Route } from 'react-router-dom';
import '../Style/myReservation.css';
import { getExperiencesData } from '../Redux/Slices/ExperiencesSlice';
import { getUserReservations } from '../Redux/Slices/reservationsSlice';
import MainPage from './MainPage';
import ReservationForm from './ReservationForm';
import MyReservations from './MyReservations';
import ExperienceDetails from './ExperienceDetails';
import AddExperience from './AddExperience';

function RoutesWrapper() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.experiences.status);
  const userStore = useSelector((state) => state.users);

  const [session, setSession] = useState(null);

  if (userStore.loading === 'succeeded' && userStore.status !== 'Authenticated') {
    navigate('/');
  }

  useEffect(() => {
    if (userStore.loading === 'succeeded' && userStore.status === 'Authenticated') {
      setSession(true);
    }
  }, [userStore]);

  useEffect(() => {
    if (session) {
      if (status === 'idle') {
        dispatch(getExperiencesData());
      }
    }
  }, [dispatch, session, status]);

  useEffect(() => {
    if (session) {
      if (status === 'succeeded') {
        dispatch(getUserReservations(userStore.user.id));
      }
    }
  }, [dispatch, status, session, userStore.user.id]);

  return (
    <Routes>
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/experiences/new" element={<AddExperience />} />
      <Route path="/experiences/:experienceID" element={<ExperienceDetails />} />
      <Route path="/:experienceName/:experienceID/new-reservation" element={<ReservationForm />} />
      <Route path="/:userID/myReservations" element={<MyReservations />} />
    </Routes>
  );
}

export default RoutesWrapper;
