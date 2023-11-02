import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getExperiencesData } from './Redux/Slices/ExperiencesSlice';
import LoginPage from './Components/LoginPage';
import MainPage from './Components/MainPage';

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.experiences.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getExperiencesData());
    }
  }, [dispatch, status]);

  return (
    <div className="Routes">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
