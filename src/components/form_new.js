import React, { useState } from "react";
import "./form.css";

function Form() {
  const formName = "mainForm";
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [school, setSchool] = useState("");
  const [field, setField] = useState("");
  const [schoolDateStarted, setSchoolDateStarted] = useState(null);
  const [schoolDateEnded, setSchoolDateEnded] = useState(null);
  const [employer, setEmployer] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [jobDateStarted, setJobDateStarted] = useState(null);
  const [jobDateEnded, setJobDateEnded] = useState(null);

  return (
    <div>
      <p>Name: {fullName}</p>
      <p>Email: {emailAddress}</p>
      <p>Phone: {phoneNumber}</p>
      <p />
      <p>School: {school}</p>
      <p>Field of Study: {field}</p>
      <p>Date Started: {schoolDateStarted}</p>
      <p>Date Ended: {schoolDateEnded}</p>
      <p />
      <p>Employer: {employer}</p>
      <p>Position: {position}</p>
      <p>Description: {description}</p>
      <p>Date Started: {jobDateStarted}</p>
      <p>Date Ended: {jobDateEnded}</p>

      <form id={formName} className="formComponent" name={formName}>
        <fieldset className="formSection" form={formName} name="generalInfo">
          <legend>General Information</legend>
          <label htmlFor="fullNameInput">
            Full Name
            <input
              type="text"
              id="fullNameInput"
              onChange={(event) => setFullName(event.target.value)}
            />
          </label>
          <label htmlFor="emailInput">
            Email Address
            <input
              type="text"
              id="emailInput"
              onChange={(event) => setEmailAddress(event.target.value)}
            />
          </label>
          <label htmlFor="phoneNumberInput">
            Phone Number
            <input
              type="text"
              id="phoneNumberInput"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </label>
        </fieldset>

        <fieldset className="formSection" form={formName} name="education">
          <legend>Education</legend>
          <label htmlFor="schoolInput">
            School
            <input
              type="text"
              id="schoolInput"
              onChange={(event) => setSchool(event.target.value)}
            />
          </label>
          <label htmlFor="fieldInput">
            Field of Study
            <input
              type="text"
              id="fieldInput"
              onChange={(event) => setField(event.target.value)}
            />
          </label>
          <label htmlFor="schoolDateStartedInput">
            Date Started
            <input
              type="date"
              id="schoolDateStartedInput"
              onChange={(event) => setSchoolDateStarted(event.target.value)}
            />
          </label>
          <label htmlFor="schoolDateEndedInput">
            Date Ended
            <input
              type="date"
              id="schoolDateEndedInput"
              onChange={(event) => setSchoolDateEnded(event.target.value)}
            />
          </label>
        </fieldset>

        <fieldset className="formSection" form={formName} name="experience">
          <legend>Experience</legend>
          <label htmlFor="employerInput">
            Employer
            <input
              type="text"
              id="employerInput"
              onChange={(event) => setEmployer(event.target.value)}
            />
          </label>
          <label htmlFor="positionInput">
            Position
            <input
              type="text"
              id="positionInput"
              onChange={(event) => setPosition(event.target.value)}
            />
          </label>
          <label htmlFor="descriptionInput">
            Description
            <textarea
              id="positionInput"
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <label htmlFor="jobDateStartedInput">
            Date Started
            <input
              type="date"
              id="jobDateStartedInput"
              onChange={(event) => setJobDateStarted(event.target.value)}
            />
          </label>
          <label htmlFor="jobDateEndedInput">
            Date Ended
            <input
              type="date"
              id="jobDateEndedInput"
              onChange={(event) => setJobDateEnded(event.target.value)}
            />
          </label>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
