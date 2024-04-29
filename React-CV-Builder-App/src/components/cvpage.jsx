import PropTypes from "prop-types";

function CV({ fullName, email, phone, address, education }) {
  return (
    <div>
      <h1>CV Page</h1>
      <p>Full Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
      <div>
        {education.map((edu) => (
          <div key={edu.school}>
            <h1>{edu.school}</h1>
            <p>Degree: {edu.degree}</p>
            <p>Start Date: {edu.start_date}</p>
            <p>End Date: {edu.end_date}</p>
            <p>Location: {edu.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

CV.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  education: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CV;
