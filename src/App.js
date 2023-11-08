import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Routes, Route, useLocation, Navigate,
} from 'react-router-dom';
import './Style/register.css';
import './Style/experienceDetails.css';
import './Style/medias.css';
import { loadUserFromLocalStorage } from './Redux/Slices/usersSlice';
import LoginPage from './Components/LoginPage';
import Register from './Components/Register';
import RoutesWrapper from './Components/RoutesWrapper';
import Navbar from './Components/NavBar';

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.experiences.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadUserFromLocalStorage());
    }
  }, [dispatch, status]);

  const location = useLocation();
  const RenderNavbar = location.pathname !== '/login' && location.pathname !== '/Register';

  return (
    <>
      <Navbar shouldRender={RenderNavbar} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/*" element={<RoutesWrapper />} />
      </Routes>
    </>
  );
}

export default App;
