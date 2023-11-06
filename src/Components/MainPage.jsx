import { useSelector } from 'react-redux';
import React from 'react';
import '../Style/Main.css';

function MainPage() {
  const DataUser = useSelector((state) => state.users);

  return (
    <div className="mainContainer">
      <h1>{`Welcome ${DataUser.user.name}`}</h1>
      <p className="secondtitle">at the best experiences in the world</p>
    </div>
  );
}

export default MainPage;
