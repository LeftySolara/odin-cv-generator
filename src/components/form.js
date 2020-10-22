import React from "react";
import PropTypes from "prop-types";
import CVDisplay from "./display";
import "./form.css";

/**
 * Submit and Cancel buttons for forms.
 *
 * @param {Object} props - Props to pass to the component.
 * @param {String} props.form - The id of the form associated with the component.
 * @param {Bool} props.editModeActive - Whether the form is in edit mode.
 * @param {Func} props.onPressHandler - Callback function that triggers when the "edit" button is pressed.
 */
function ButtonBox(props) {
  const { form, editModeActive, onPressHandler } = props;
  if (editModeActive) {
    return (
      <div className="buttonBox">
        <input type="submit" form={form} value="Submit" />
        <input type="button" form={form} value="Cancel" />
      </div>
    );
  }
  else {
    return (
      <div>
        <input type="button" value="Edit" onClick={onPressHandler} />
      </div>
    );
  }
}

ButtonBox.propTypes = {
  form: PropTypes.string.isRequired,
  editModeActive: PropTypes.bool.isRequired,
  onPressHandler: PropTypes.func.isRequired,
};

/**
 * Form section for entering general contact information.
 *
 * @param {Object} props - Props to pass to the component.
 * @param {String} props.name - The user's name.
 * @param {String} props.email - The user's email address.
 * @param {String} props.phone - The user's phone number.
 * @param {Func} props.onChangeHandler - Callback function that triggers when form data is changed.
 */
function GeneralInfoSection(props) {
  const { name, email, phone, onChangeHandler } = props;

  return (
    <div className="formSection">
      <h2>General Information</h2>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full name"
          value={name}
          onChange={onChangeHandler}
        />
      </label><br />
      <label htmlFor="email">
        Email Address
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={onChangeHandler}
        />
      </label><br />
      <label htmlFor="phone">
        Phone Number
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone number"
          value={phone}
          onChange={onChangeHandler}
        />
      </label><br />
    </div>
  );
}

GeneralInfoSection.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
};

GeneralInfoSection.defaultProps = {
  name: "",
  email: "",
  phone: "",
};

/**
 * Form section for entering education information.
 *
 * @param {Object} props - Props to pass to the component.
 * @param {String} props.school - Name of the user's school.
 * @param {String} props.degree - The user's field of study.
 * @param {String} props.dateStarted - The date the user started school.
 * @param {String} props.dateEnded - The date the user stopped attending school.
 * @param {Func} props.onChangeHandler - Callback function that triggers when form data is changed.
 */
function EducationSection(props) {
  const { school, degree, dateStarted, dateEnded, onChangeHandler } = props;
  return (
    <div className="formSection">
      <h2>Education</h2>
      <label htmlFor="school">
        School
        <input
          type="text"
          id="school"
          name="school"
          placeholder="School name"
          value={school}
          onChange={onChangeHandler}
        />
      </label><br />
      <label htmlFor="degree">
        Field of Study
        <input
          type="text"
          id="degree"
          name="degree"
          placeholder="Field of study"
          value={degree}
          onChange={onChangeHandler}
        />
      </label><br />
      <label htmlFor="schoolDateStarted">
        Date Started
        <input
          type="date"
          id="schoolDateStarted"
          name="schoolDateStarted"
          value={dateStarted}
          onChange={onChangeHandler}
        />
      </label><br />
      <label htmlFor="schoolDateEnded">
        Date Ended
        <input
          type="date"
          id="schoolDateEnded"
          name="schoolDateEnded"
          value={dateEnded}
          onChange={onChangeHandler}
        />
      </label><br />
    </div>
  );
}

EducationSection.propTypes = {
  school: PropTypes.string,
  degree: PropTypes.string,
  dateStarted: PropTypes.string,
  dateEnded: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
};

EducationSection.defaultProps = {
  school: "",
  degree: "",
  dateStarted: "",
  dateEnded: "",
};

/**
 * Form section for entering experience information.
 *
 * @param {Object} props - Props to pass to the component.
 * @param {String} props.company - The name of the company.
 * @param {String} props.position - The position held at the company.
 * @param {String} props.description - Description of job duties at {position}.
 * @param {String} props.dateStarted - Date that the user started working at {company}.
 * @param {String} props.dateEnded - Date that the user stopped working at {company}.
 * @param {Bool} props.current - Whether the user still works at {company}.
 */
function ExperienceSection(props) {
  const {
    company,
    position,
    description,
    dateStarted,
    dateEnded,
    current,
    onChangeHandler,
  } = props;

  return (
    <div className="formSection">
      <h2>Experience</h2>
      <label htmlFor="company">
        Company
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company name"
          value={company}
          onChange={onChangeHandler}
        />
      </label><br />
      <label htmlFor="position">
        Position
        <input
          type="text"
          id="position"
          name="position"
          placeholder="Position"
          value={position}
          onChange={onChangeHandler}
        />
      </label><br />
      <label htmlFor="description">
        Description
        <textarea
          id="description"
          name="description"
          value={description}
          placeholder="Description of job duties"
          onChange={onChangeHandler}
        />
      </label><br />
      <label htmlFor="jobDateStarted">
        Date Started
        <input
          type="date"
          id="jobDateStarted"
          name="jobDateStarted"
          value={dateStarted}
          onChange={onChangeHandler}
        />
      </label><br />
      <label htmlFor="jobDateEnded">
        Date Ended
        <input
          type="date"
          id="jobDateEnded"
          name="jobDateEnded"
          value={dateEnded}
          onChange={onChangeHandler}
        />
      </label><br />
      <label id="currentEmployer" htmlFor="currentEmployer">
        <input
          type="checkbox"
          id="currentEmployer"
          name="currentEmployer"
          value={current}
        />
        This is my current employer.
      </label><br />
    </div>
  );
}

ExperienceSection.propTypes = {
  company: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  dateStarted: PropTypes.string,
  dateEnded: PropTypes.string,
  current: PropTypes.bool,
  onChangeHandler: PropTypes.func.isRequired,
};

ExperienceSection.defaultProps = {
  company: "",
  position: "",
  description: "",
  dateStarted: "",
  dateEnded: "",
  current: false,
};

/**
 * The main form.
 */
class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editModeActive: true,
      name: "",
      email: "",
      phone: "",
      school: "",
      degree: "",
      schoolDateStarted: "",
      schoolDateEnded: "",
      company: "",
      position: "",
      description: "",
      jobDateStarted: "",
      jobDateEnded: "",
      current: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    this.changeMode();
    event.preventDefault();
  }

  changeMode() {
    const { editModeActive } = this.state;
    this.setState({editModeActive: !editModeActive});
  }

  render() {
    const formName = "cvForm";
    const {
      editModeActive,
      name,
      email,
      phone,
      school,
      degree,
      city,
      schoolDateStarted,
      schoolDateEnded,
      company,
      position,
      description,
      jobDateStarted,
      jobDateEnded,
      current 
    } = this.state;

    if (editModeActive) {
      return (
        <form id={formName} className="formComponent" name={formName} onSubmit={this.handleSubmit}>
          <GeneralInfoSection
            name={name}
            email={email}
            phone={phone}
            onChangeHandler={this.handleChange}
          />
          <EducationSection
            school={school}
            degree={degree}
            dateStarted={schoolDateStarted}
            dateEnded={schoolDateEnded}
            onChangeHandler={this.handleChange}
          />
          <ExperienceSection
            company={company}
            position={position}
            description={description}
            dateStarted={jobDateStarted}
            dateEnded={jobDateEnded}
            current={current}
            onChangeHandler={this.handleChange}
          />
          <ButtonBox form={formName} editModeActive={editModeActive} onPressHandler={this.changeMode} />
        </form>
      );
    }
    else {
      return (
        <div>
          <CVDisplay
            name={name}
            email={email}
            phone={phone}
            school={school}
            degree={degree}
            schoolCity={city}
            schoolDateStarted={schoolDateStarted}
            schoolDateEnded={schoolDateEnded}
            company={company}
            position={position}
            description={description}
            jobCity={city}
            jobDateStarted={jobDateStarted}
            jobDateEnded={jobDateEnded}
          />
          <ButtonBox form={formName} editModeActive={editModeActive} onPressHandler={this.changeMode} />
        </div>
      );
    }
  }
}

export default MainForm;
