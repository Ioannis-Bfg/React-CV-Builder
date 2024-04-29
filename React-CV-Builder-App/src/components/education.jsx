import "../styles/education.css";
function Education() {
  return (
    <div id="education">
      <div id="header_education">
        <div id="header_education_title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-award"
          >
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
          <h2>Education</h2>
        </div>
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
          <polyline points="6 18 12 12 6 6"></polyline>
        </svg>
      </div>
      <EducationList />
    </div>
  );
}

function AddEducation() {
  return (
    <button>
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
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      Add Education
    </button>
  );
}

function AddEducationForm() {
  return (
    <div id="add_education_form">
      <form action="">
        <label htmlFor="school">School</label>
        <input
          type="text"
          name="school"
          id="school"
          placeholder="School Name"
          required
        />

        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          name="degree"
          id="degree"
          placeholder="Degree Obtained"
          required
        />

        <label htmlFor="start_date">Start Date</label>
        <input type="date" name="start_date" id="start_date" required />

        <label htmlFor="end_date">End Date</label>
        <input type="date" name="end_date" id="end_date" required />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location"
          required
        />

        <button>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  );
}
function EducationList() {
  const edu_list = ["Cambridge", "Poli", "Uni of Patras"];
  return (
    <div id="education_list">
      {edu_list.map((item) => (
        <div
          className="education_item"
          key={crypto.getRandomValues(new Uint32Array(1))[0]}
        >
          {item}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
      ))}
    </div>
  );
}

export default Education;
