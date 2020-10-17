import React from "react";
import PropTypes from "prop-types";

/**
 * Submit and Cancel buttons for forms.
 *
 * @param {Object} props - Props to pass to the component.
 * @param {String} form - The id of the form associated with the component.
 */
function ButtonBox({ form }) {
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
 * Component containing a text input and an associated label.
 *
 * @param {Object} props - Props to pass to the component.
 * @param {String} props.name - The name to use for the label and input field.
 * @param {String} props.form - The id of the form associated with the component.
 */
function TextInput({ name, form }) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type="text" id={name} name={name} form={form} />
    </div>
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
};

function GeneralInfo({ form }) {
  return (
    <div>
      <h2>General Information</h2>
      <TextInput name="Name" form={form} />
      <TextInput name="Email" form={form} />
      <TextInput name="Phone" form={form} />
      <ButtonBox form={form} />
    </div>
  );
}

GeneralInfo.propTypes = {
  form: PropTypes.string.isRequired,
};

export default GeneralInfo;
