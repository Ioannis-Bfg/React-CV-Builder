import PropTypes from "prop-types";

function CV({ fullName, email, phone, address }) {
  return (
    <div>
      <h1>CV Page</h1>
      <p>Full Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </div>
  );
}

CV.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
export default CV;
