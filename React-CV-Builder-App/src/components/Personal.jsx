import "../styles/personal.css";
import PropTypes from "prop-types";
function PersonalDetails({
  handleChangeName,
  handleChangeEmail,
  handleChangePhone,
  handleChangeAddress,
}) {
  return (
    <div className="personal_details">
      <h2>Personal Details</h2>
      <form action="" id="personal_details">
        <label htmlFor="full_name">Full Name</label>
        <input
          type="text"
          form="personal_details"
          id="full_name"
          onChange={handleChangeName}
          name="full_name"
          placeholder="Full Name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          form="personal_details"
          id="email"
          name="email"
          onChange={handleChangeEmail}
          placeholder="Email"
        />
        <label htmlFor="phone_number">Phone Number</label>
        <input
          type="tel"
          form="personal_details"
          id="phone_number"
          onChange={handleChangePhone}
          name="phone_number"
          placeholder="Phone Number"
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          form="personal_details"
          onChange={handleChangeAddress}
          id="address"
          name="address"
          placeholder="Your address (Optional)"
        />
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
