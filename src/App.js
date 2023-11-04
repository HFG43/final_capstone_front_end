import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import './Style/register.css';
import './Style/medias.css';
import './Style/myReservation.css';
import { getExperiencesData } from './Redux/Slices/ExperiencesSlice';
import { loadUserFromLocalStorage } from './Redux/Slices/usersSlice';
import { getUserReservations } from './Redux/Slices/reservationsSlice';

function App() {
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

  return (
    <div className="Routes" />
  );
}

export default App;
