import React from "react";
import PropTypes from "prop-types";

/**
 * Formatted display of the user's general information.
 *
 * @param {Object} props - Props to pass to the component.
 * @param {String} props.name - The user's name.
 * @param {String} props.email - The user's email address.
 * @param {String} peops.phone - The user's phone number.
 */
function GeneralInfoDisplay(props) {
  const { name, email, phone } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {email}
        {" | "}
        {phone}
      </p>
    </div>
  );
}

GeneralInfoDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
};

GeneralInfoDisplay.defaultProps = {
  email: "",
  phone: "",
};

/**
 * Formatted display of the user's education info.
 *
 * @param {Object} props - Props to pass to the component.
 * @param {String} props.school - The name of the user's school.
 * @param {String} props.degree - The user's degree or field of study.
 * @param {String} props.city - The city where {school} is located.
 * @param {String} props.dateStarted - The date the user began studying at {school}.
 * @param {String} props.dateEnded - The date the user finished studying at {school}.
 */
function EducationDisplay(props) {
  const { school, degree, city, dateStarted, dateEnded } = props;
  return (
    <div>
      <h2>Education</h2>
      <h3>{school}</h3>
      <p>{degree}</p>
      <p>{city}</p>
      <p>
        {dateStarted}
        {" - "}
        {dateEnded}
      </p>
    </div>
  );
}

EducationDisplay.propTypes = {
  school: PropTypes.string,
  degree: PropTypes.string,
  city: PropTypes.string,
  dateStarted: PropTypes.string,
  dateEnded: PropTypes.string,
};

EducationDisplay.defaultProps = {
  school: "",
  degree: "",
  city: "",
  dateStarted: "",
  dateEnded: "",
};

/**
 * Formatted display of the user's experience.
 *
 * @param {Object} props - Props to pass to the component.
 * @param {String} props.company - The name of the user's employer.
 * @param {String} props.position - The user's job title at {company}.
 * @param {String} props.description - A brief description of the user's job duties in {position}.
 * @param {String} props.city - The city where {company} is located.
 * @param {String} props.dateStarted - The date the user began working at {company}.
 * @param {String} props.dateEnded - The date the user finished working at {company}.
 */
function ExperienceDisplay(props) {
  const {
    company,
    position,
    description,
    city,
    dateStarted,
    dateEnded,
  } = props;

  return (
    <div>
      <h2>Experience</h2>
      <h3>{company}</h3>
      <p>{position}</p>
      <p>{description}</p>
      <p>{city}</p>
      <p>{dateStarted}</p>
      <p>{dateEnded}</p>
    </div>
  );
}

ExperienceDisplay.propTypes = {
  company: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  city: PropTypes.string,
  dateStarted: PropTypes.string,
  dateEnded: PropTypes.string,
};

ExperienceDisplay.defaultProps = {
  company: "",
  position: "",
  description: "",
  city: "",
  dateStarted: "",
  dateEnded: "",
};

/**
 * Formatted display of the information entered in the form.
 *
 * @param {Object} props - Props to pass to the component.
 */
function CVDisplay(props) {
  return (
    <div>
      <GeneralInfoDisplay
        name="First Last"
        email="email@example.com"
        phone="(123) 456-789"
      />
      <EducationDisplay
        school="School"
        degree="Degree"
        city="City"
        dateStarted="1/1/2020"
        dateEnded="1/2/2020"
      />
      <ExperienceDisplay
        compan="Company"
        position="Position"
        description="Description"
        city="City"
        dateStarted="1/1/2020"
        dateEnded="1/2/2020"
      />
    </div>
  );
}

export default CVDisplay;
