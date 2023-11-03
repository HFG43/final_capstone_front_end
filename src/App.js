import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import './Style/register.css';
import './Style/medias.css';
import { getExperiencesData } from './Redux/Slices/ExperiencesSlice';
import { loadUserFromLocalStorage } from './Redux/Slices/usersSlice';

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.experiences.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getExperiencesData());
      // Set user infromation from localStorage
      dispatch(loadUserFromLocalStorage());
    }
  }, [dispatch, status]);

  return (
    <div className="Routes" />
  );
}

export default App;
