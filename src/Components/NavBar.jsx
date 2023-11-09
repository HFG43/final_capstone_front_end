import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { LiaGoogle } from 'react-icons/lia';
import React, { useEffect, useState } from 'react';
import { resetUserState } from '../Redux/Slices/usersSlice';
import logo from '../img/logo.jpg';

const Navbar = ({ shouldRender }) => {
  const dispatch = useDispatch();
  const [navbarVisible, setNavbarVisible] = useState(true);

  const users = useSelector((state) => state.users);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setNavbarVisible(navbarVisible);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navbarVisible]);

  if (shouldRender) {
    import('../Style/NavBar.css');
  }

  if (!shouldRender) {
    return null;
  }

  const logout = () => {
    dispatch(resetUserState());
    window.location.href = '/login';
  };

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <>
      <button type="button" className="hamburger-icon" onClick={toggleNavbar}>&#9776;</button>
      <nav className="navbar" style={{ display: navbarVisible ? 'flex' : 'none' }}>
        <button type="button" className="hamburger-icon" onClick={toggleNavbar}>ⅹ</button>
        <img src={logo} alt="Logo" />
        <Link className="btn-nav" to="/MainPage">
          Experiences
        </Link>
        <Link className="btn-nav" to={`/${users.user.id}/myReservations`}>
          My reservations
        </Link>
        <Link className="btn-nav" to="/experiences/new">
          Add Experience
        </Link>
        <Link className="btn-nav" to="/experiences/delete">
          Delete Experiences
        </Link>
        <button type="button" className="btn-nav" onClick={logout}>
          Logout
        </button>
        <footer className="footer">
          <BsTwitter />
          <BiLogoFacebook />
          <LiaGoogle />
          <br />
          2023
        </footer>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  shouldRender: PropTypes.bool.isRequired,
};

export default Navbar;
