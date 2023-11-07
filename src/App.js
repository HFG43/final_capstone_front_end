import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Navigate, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import './Style/register.css';
import './Style/experienceDetails.css';
import './Style/medias.css';
import { loadUserFromLocalStorage } from './Redux/Slices/usersSlice';
import LoginPage from './Components/LoginPage';
import Register from './Components/Register';
import RoutesWrapper from './Components/RoutesWrapper';

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.experiences.status);

  useEffect(() => {
    if (status === 'idle') {
      // Set user information from localStorage
      dispatch(loadUserFromLocalStorage());
    }
  }, [dispatch, status]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/*" element={<RoutesWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
