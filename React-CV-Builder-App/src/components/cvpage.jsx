import PropTypes from "prop-types";
import "../styles/cv_page.css";

function CV({
  fullName,
  email,
  phone,
  address,
  education,
  experience,
  previewSrc,
}) {
  return (
    <>
      <div id="user_personal">
        <img id="preview" src={previewSrc} alt="Your Image" />
        <div id="user_personal_info" className="info_wrapper">
          <p id="user-personal_info_name">{fullName}</p>
          <div id="user_personal_info_extra">
            <div id="user_personal_info_email" className="info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <p>{email}</p>
            </div>
            <div id="user_personal_info_phone" className="info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <p>{phone}</p>
            </div>
            <div id="user_personal_info_address" className="info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p>{address}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="user_education">
        <div id="user_education_heading">EDUCATION</div>
        <div id="user_education_line"></div>
        {education.map((edu) => (
          <div
            className="user_education_module"
            key={crypto.getRandomValues(new Uint32Array(1))[0]}
          >
            <div className="user_education_module_left">
              <p>
                {edu.start_date} / {edu.end_date}
              </p>
              <p>{edu.location}</p>
            </div>
            <div className="user_education_module_right">
              <p>{edu.school}</p>
              <p>{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
      <div id="user_experience">
        <div id="user_experience_heading_wrapper">
          <div id="user_experience_heading">EXPERIENCE</div>
          <div id="user_experience_line"></div>
        </div>
        {experience.map((exp) => (
          <div
            key={crypto.getRandomValues(new Uint32Array(1))[0]}
            className="user_experience_module"
          >
            <div className="user_experience_module_left">
              <p>
                {exp.start_date} / {exp.end_date}
              </p>
              <p>{exp.location}</p>
            </div>
            <div className="user_experience_module_right">
              <p>{exp.company}</p>
              <p>{exp.position}</p>
            </div>
          </div>
        ))}
      </div>
    </>
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
