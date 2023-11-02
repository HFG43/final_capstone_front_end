import React from 'react';
import { useSelector } from 'react-redux';

function MainPage() {
  const storageData = useSelector((state) => state.users);

  return (
    <div className="mainContainer">
      <p>
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
