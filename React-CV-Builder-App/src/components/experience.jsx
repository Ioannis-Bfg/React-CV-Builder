function Experience() {
  return (
    <div id="experience">
      <div id="header_experience">
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
          className="feather feather-briefcase"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
        <h2>Experience</h2>
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
      <ExperienceList />
      <AddExperience />
    </div>
  );
}

function AddExperience() {
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
      Add Experience
    </button>
  );
}

function AddExperienceForm() {
  return (
    <div id="add_experience_form">
      <form action="">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Company Name"
          required
        />

        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          id="position"
          placeholder="Position Held"
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
function ExperienceList(props) {
  const exp_list = ["Microsoft", "Amazon", "Google"];
  return (
    <div id="experience_list">
      {exp_list.map((item, index) => (
        <div key={crypto.getRandomValues(new Uint32Array(1))[0]}>
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

export default Experience;
