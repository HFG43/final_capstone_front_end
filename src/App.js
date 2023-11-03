import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import './Style/register.css';
import './Style/medias.css';
import { getExperiencesData } from './Redux/Slices/ExperiencesSlice';

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.experiences.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getExperiencesData());
    }
  }, [dispatch, status]);

  return (
    <div className="Routes" />
  );
}

export default App;
