import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiChevronRightCircle, BiGift } from 'react-icons/bi';
import ExperienceIncluded from './ExperienceIncluded';
import getRandomDiscount from '../logic/utils';

function ExperienceDetails() {
  const { experienceID } = useParams();

  const [discount] = useState(getRandomDiscount({ start: 5, end: 50 }));

  const { experiences } = useSelector((state) => state.experiences);

  const selectedExperience = experiences.find((exp) => exp.id === parseInt(experienceID, 10));

  const experienceSlug = selectedExperience?.name.replace(/\s/g, '-').toLowerCase();

  const experienceReservationURL = `/${experienceSlug}/${experienceID}/new-reservation`;

  const detailsIncluded = selectedExperience?.details === undefined ? '' : selectedExperience?.details;

  return (
    <div className="w-100">
      <div className="experience-details w-100">
        <div className="experience-image w-100">
          <img src={selectedExperience?.image} alt={selectedExperience?.name} className="fluid-img" />
          <ExperienceIncluded mediaStyles="desktop" detailsIncluded={detailsIncluded} />
        </div>
        <div className="experience-content w-100">
          <h2 className="experience-name text-right">{selectedExperience?.name}</h2>
          <p className="experience-desc text-right">
            {selectedExperience?.description}
          </p>
          <ul className="experience-prices w-100">
            <li>
              <span>Experience Fee</span>
              <span>
                $
                {selectedExperience?.experience_fee}
              </span>
            </li>
            <li>
              <span>Add testing fee</span>
              <span>
                $
                {selectedExperience?.add_testing_fee}
              </span>
            </li>
            <li>
              <span>Reserve Full Table</span>
              <span>
                $
                {selectedExperience?.reserve_full_table}
              </span>
            </li>
            <li>
              <span>Guests</span>
              <span>
                {selectedExperience?.guests}
                {' '}
                people
              </span>
            </li>
          </ul>
          <ExperienceIncluded mediaStyles="mobile" detailsIncluded={detailsIncluded} />
          {
            discount && (
            <div className="experience-offers">
              <span className="bold">
                {discount}
                % OFF!
              </span>
              {' '}
              <span>as a gift of the day!</span>
              {' '}
              <BiGift />
            </div>
            )
          }
          <div className="reserve-button">
            <Link to={experienceReservationURL} className="btn-reserve btn-default d-flex">
              <span>Reserve Now</span>
              <BiChevronRightCircle />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetails;
