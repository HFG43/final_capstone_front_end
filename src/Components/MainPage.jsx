import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function MainPage() {
  const storageData = useSelector((state) => state.users);

  return (
    <div className="mainContainer">
      <p>
        <NavLink to={`/${storageData.user.id}/myReservations`}>My reservations</NavLink>
        <NavLink to="/Experince1/1">Book</NavLink>
        Esto es la página principal para
        {storageData.user.name}
      </p>
    </div>
  );
}

export default MainPage;

/* const user = useSelector((state) => state.user); */
/* const dispatch = useDispatch(); */
/* const navigate = useNavigate(); */
/* const [inputValue, setInputValue] = useState(''); */
