import PropTypes from 'prop-types';

function ExperienceIncluded({ detailsIncluded, mediaStyles }) {
  return (
    <div className={`experience-extra-details w-100 ${mediaStyles}`}>
      <h3 className="experience-extra-details-title">
        ¿What does this experience include?
      </h3>
      <p className="experience-included w-100">
        { !detailsIncluded
          ? (<span className="no-details"><i>No details included</i></span>)
          : (detailsIncluded)}
      </p>
    </div>
  );
}

ExperienceIncluded.propTypes = {
  detailsIncluded: PropTypes.string.isRequired,
  mediaStyles: PropTypes.string.isRequired,
};

export default ExperienceIncluded;
