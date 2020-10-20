import React from "react";
import PropTypes from "prop-types";

/**
 * Submit and Cancel buttons for forms.
 *
 * @param {Object} props - Props to pass to the component.
 * @param {String} form - The id of the form associated with the component.
 */
function ButtonBox(props) {
  const { form } = props;
  return (
    <div>
      <input type="submit" form={form} value="Submit" />
      <input type="button" form={form} value="Cancel" />
    </div>
  );
}

ButtonBox.propTypes = {
  form: PropTypes.string.isRequired,
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
    <div>
      <h2>General Information</h2>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
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
          placeholder="Email Address"
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
          placeholder="Phone Number"
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
    <div>
      <h2>Education</h2>
      <label htmlFor="school">
        School
        <input
          type="text"
          id="school"
          name="school"
          placeholder="School Name"
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
          placeholder="Field of Study"
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
    <div>
      <h2>Experience</h2>
      <label htmlFor="company">
        Company
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company Name"
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
      <label htmlFor="currentEmployer">
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
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const formName = "cvForm";
    return (
      <form id={formName} name={formName} onSubmit={this.handleSubmit}>
        <GeneralInfoSection onChangeHandler={this.handleChange} />
        <EducationSection onChangeHandler={this.handleChange} />
        <ExperienceSection onChangeHandler={this.handleChange} />
        <ButtonBox form={formName} />
      </form>
    );
  }
}

export default MainForm;
