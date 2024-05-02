import "../styles/personal.css";
import PropTypes from "prop-types";
import { useState } from "react";
function PersonalDetails({
  handleChangeName,
  handleChangeEmail,
  handleChangePhone,
  handleChangeAddress,
  handleImageUpload,
}) {
  return (
    <div className="personal_details">
      <h2>Personal Details</h2>
      <form action="" id="personal_details" encType="multipart/form-data">
        <label htmlFor="full_name">
          Full Name{" "}
          <input
            type="text"
            form="personal_details"
            id="full_name"
            onChange={handleChangeName}
            name="full_name"
            placeholder="Full Name"
          />
        </label>

        <label htmlFor="email">
          Email{" "}
          <input
            type="email"
            form="personal_details"
            id="email"
            name="email"
            onChange={handleChangeEmail}
            placeholder="Email"
          />
        </label>

        <label htmlFor="phone_number">
          Phone Number{" "}
          <input
            type="tel"
            form="personal_details"
            id="phone_number"
            onChange={handleChangePhone}
            name="phone_number"
            placeholder="Phone Number"
          />
        </label>

        <label htmlFor="address">
          Address{" "}
          <input
            type="text"
            form="personal_details"
            onChange={handleChangeAddress}
            id="address"
            name="address"
            placeholder="Your address (Optional)"
          />
        </label>

        <label htmlFor="imageInput">
          Picture{" "}
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
      </form>
    </div>
  );
}

PersonalDetails.propTypes = {
  handleChangeName: PropTypes.func.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePhone: PropTypes.func.isRequired,
  handleChangeAddress: PropTypes.func.isRequired,
};
export default PersonalDetails;
