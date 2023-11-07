import { Link } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import { useSelector } from 'react-redux';
import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { LiaGoogle } from 'react-icons/lia';
import '../Style/Main.css';
import 'swiper/css';

register();

function MainPage() {
  const DataUser = useSelector((state) => state.users);
  const DataExperiences = useSelector((state) => state.experiences);

  return (
    <div className="mainContainer">
      <h1>{`Welcome ${DataUser.user.name}`}</h1>
      <p className="secondtitle">at the best experiences in the world</p>
      <swiper-container slides-per-view="3" navigation="true" class="swiper-container">
        {DataExperiences.experiences.map((item) => (
          <swiper-slide key={item.id}>
            <Link className="cardlink" to={`../experiences/${item.id}`}>
              <div className="card">
                <h2>{item.name}</h2>
                <img src={item.image} alt="ExperiencePicture" />
                <p>Experience description:</p>
                <p className="cardDesc">{item.description}</p>
                <div>
                  <BsTwitter />
                  <BiLogoFacebook />
                  <LiaGoogle />
                </div>
              </div>
            </Link>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default MainPage;
