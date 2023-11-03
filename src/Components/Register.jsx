import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../Redux/Slices/usersSlice';

const user = (userName, nickname) => ({
  name: userName,
  username: nickname,
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CreateUser = (e) => {
    const btn = e.target;
    const dataForm = btn.parentElement.parentElement;
    const name = dataForm.querySelector('#name').value;
    const username = dataForm.querySelector('#username').value;
    const msg = dataForm.querySelector('#message-error');
    const response = dispatch(createUser(user(name, username)));

    response.then((data) => {
      if (typeof data.payload !== 'object') {
        msg.textContent = 'User already exist';
      } else {
        msg.textContent = '';
        navigate('/MainPage');
      }
    });
  };

  return (
    <section className="image-back d-flex-col">
      <div className="d-flex-col form-cont gap">
        <h2 className="title-form">Register</h2>
        <form className="d-flex-col gap" onSubmit={(ev) => ev.preventDefault()}>
          <span id="message-error" />
          <input id="name" type="text" placeholder="Name" className="form-input" />
          <input id="username" type="text" placeholder="Username" className="form-input" />
          <div className="btn-cont gap">
            <button type="submit" className="form-submit" onClick={(e) => CreateUser(e)}>Register</button>
            <Link to="/" className="form-submit d-flex-col">Log In</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
