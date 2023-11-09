import { useDispatch } from 'react-redux';
import { experience } from '../logic/formatObjects';
import { createExperience } from '../Redux/Slices/ExperiencesSlice';

function AddExperience() {
  const dispatch = useDispatch();

  const CreateExperience = (e) => {
    const btn = e.target;
    const dataForm = btn.parentElement;
    const name = dataForm.querySelector('#name');
    const description = dataForm.querySelector('#description');
    const experienceFee = dataForm.querySelector('#expfee');
    const addTestingFee = dataForm.querySelector('#testing');
    const reserveFullTable = dataForm.querySelector('#fulltable');
    const guests = dataForm.querySelector('#guests');
    const experienceImage = dataForm.querySelector('#image');
    const msg = dataForm.querySelector('#message-error');

    if (name.value === '' || description.value === '' || experienceFee.value === '' || addTestingFee.value === '' || reserveFullTable.value === '' || guests.value === '' || experienceImage.value === '') {
      msg.textContent = 'Fill out all the fields please';
    } else {
      const response = dispatch(createExperience(
        experience(name.value, description.value, experienceFee.value, addTestingFee.value, reserveFullTable.value, guests.value, experienceImage.value),
      ));

      response.then((data) => {
        if (typeof data.payload !== 'object') {
          msg.textContent = 'Something went wrong, please try again later';
        } else {
          msg.textContent = 'Experience created successfully';
          name.value = '';
          description.value = '';
          experienceFee.value = '';
          addTestingFee.value = '';
          reserveFullTable.value = '';
          guests.value = '';
          experienceImage.value = '';
        }
      });
    }
  };

  return (
    <section className="image-back d-flex-col reserv-back">
      <div className="d-flex-col form-cont gap">
        <h2 className="title-form title-reserv color">Add a new experince</h2>
        <span className="d-flex reserv-desc span-desc">TESTEO</span>
        <form className="d-flex-col gap" onSubmit={(ev) => ev.preventDefault()}>
          <span id="message-error" />
          <input id="name" type="text" placeholder="Experience Name" className="form-input reserv-input" required />
          <input id="description" type="text" placeholder="Describe the Experience" className="form-input reserv-input" required />
          <input id="expfee" type="number" placeholder="Experience Fee" className="form-input reserv-input" required min="0" step="1"/>
          <input id="testing" type="number" placeholder="Additional Testing Fee" className="form-input reserv-input" rrequired min="0" step="1" />
          <input id="fulltable" type="number" placeholder="Additional Full Table Fee" className="form-input reserv-input" required min="0" step="1" />
          <input id="guests" type="number" placeholder="Guests included in Experience" className="form-input reserv-input" required min="0" step="1" />
          <input id="image" type="text" placeholder="Add an Experience image" className="form-input reserv-input" required />
          <input type="submit" className="form-submit d-flex-col" onClick={(e) => CreateExperience(e)} value="Register" />
        </form>
      </div>
    </section>
  );
}

export default AddExperience;
