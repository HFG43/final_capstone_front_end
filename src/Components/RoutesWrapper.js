import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useLocation, useNavigate, Routes, Route,
} from 'react-router-dom';
import '../Style/myReservation.css';
import { getExperiencesData } from '../Redux/Slices/ExperiencesSlice';
import { getUserReservations } from '../Redux/Slices/reservationsSlice';
import MainPage from './MainPage';
import ReservationForm from './ReservationForm';
import MyReservations from './MyReservations';
import ExperienceCard from './ExperienceCard';

function RoutesWrapper() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const status = useSelector((state) => state.experiences.status);
  const userStore = useSelector((state) => state.users);

  useEffect(() => {
    if ((userStore.status === 'Authenticated') && (userStore.user.username)) {
      console.log(userStore.user.username);
      navigate(location);
    } else {
      navigate('/login');
    }
  }, [navigate, userStore.status]);

  useEffect(() => {
    if (status === 'idle' && userStore.status === 'Authenticated') {
      dispatch(getExperiencesData());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (status === 'succeeded') {
      dispatch(getUserReservations(userStore.user.id));
    }
  }, [dispatch, status, userStore.user.id]);

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
