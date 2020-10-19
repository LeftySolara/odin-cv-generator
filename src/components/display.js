import React from "react";
import PropTypes from "prop-types";

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
