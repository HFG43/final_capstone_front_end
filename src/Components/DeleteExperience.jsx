import { useDispatch, useSelector } from 'react-redux';
import { deleteExperience } from '../Redux/Slices/experiencesSlice';

function DeleteExperience() {
  const dispatch = useDispatch();
  const { experiences } = useSelector((state) => state.experiences);

  const experiencesList = experiences.map((experience) => experience);

  if (experiencesList.length !== 0) {
    return (
      <section className="mine-cont d-flex-col gap">
        <h2 className="title-form mt mb">Experiences</h2>
        <div className="d-flex card-reserv-cont gap grid">
          {experiencesList.map((experience) => (
            <div key={experience.id} className="reserv-card d-flex-col gap">
              <img className="reserv-img" src={experience.image} alt={experience.name} />
              <h3 className="m0">{experience.name}</h3>
              <span className="d-flex span-desc">{experience.description}</span>
              <button className="btn-cancel" type="button" onClick={() => dispatch(deleteExperience(experience.id))}>Delete Experience</button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mine-cont d-flex-col gap">
      <h2 className="title-form mt mb">Experiences</h2>
      <span className="non-reserve mt">No experiences added yet</span>
    </section>
  );
}

export default DeleteExperience;
