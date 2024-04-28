import "../styles/personal.css";
function PersonalDetails() {
  return (
    <div className="personal_details">
      <h2>Personal Details</h2>
      <form action="" id="personal_details">
        <label htmlFor="full_name">Full Name</label>
        <input
          type="text"
          form="personal_details"
          id="full_name"
          name="full_name"
          placeholder="Full Name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          form="personal_details"
          id="email"
          name="email"
          placeholder="Email"
        />
        <label htmlFor="phone_number">Phone Number</label>
        <input
          type="tel"
          form="personal_details"
          id="phone_number"
          name="phone_number"
          placeholder="Phone Number"
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          form="personal_details"
          id="address"
          name="address"
          placeholder="Your address (Optional)"
        />
      </form>
    </div>
  );
}

export default PersonalDetails;
