import "../styles/experience.css";
import React, { useState } from "react";
function Experience({ handleExpSave, experience, experience_remove }) {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const experienceListStyle = {
    display: experience.length > 0 ? "block" : "none",
  };

  const expDropdown = () => {
    const dropdownContent = document.querySelector("#exp_dropdown");
    const exp_dropdown_icon = document.querySelector("#exp_dropdown_icon");
    const header_experience = document.querySelector("#header_experience");
    dropdownContent.classList.toggle("expanded_exp");
    exp_dropdown_icon.classList.toggle("rotated_exp");
    header_experience.classList.toggle("rounded_exp");
  };
  return (
    <div id="experience">
      <div id="header_experience" onClick={expDropdown}>
        <div id="header_experience_title">
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
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          id="exp_dropdown_icon"
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
      <div id="exp_dropdown">
        {showForm ? (
          <AddExperienceForm
            handleExpSave={handleExpSave}
            toggleForm={toggleForm}
          />
        ) : (
          <>
            <div id="experience_list_wrapper" style={experienceListStyle}>
              <ExperienceList
                experience={experience}
                experience_remove={experience_remove}
              />
            </div>
            <AddExperience handleSwitch={toggleForm} />
          </>
        )}
      </div>
    </div>
  );
}

function AddExperience({ handleSwitch }) {
  return (
    <div id="add_experience_button_wrapper">
      <button id="add_experience_button" onClick={handleSwitch}>
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
        Experience
      </button>
    </div>
  );
}

function AddExperienceForm({ handleExpSave, toggleForm }) {
  function handleSubmit(event) {
    event.preventDefault();
    handleExpSave(event);
    toggleForm();
  }

  function handleCancel(event) {
    event.preventDefault();
    toggleForm();
  }
  return (
    <div id="add_experience_form">
      <form onSubmit={handleSubmit} id="experience_form">
        <label htmlFor="company" id="company_input">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company Name"
          required
        />

        <label id="position_input">Position</label>
        <input
          type="text"
          name="position"
          id="position"
          placeholder="Position Held"
          required
        />

        <label htmlFor="start_date" id="start_date_exp_input">
          Start Date
        </label>
        <input type="date" name="start_date" id="start_date_exp" required />

        <label htmlFor="end_date" id="end_date_exp_input">
          End Date
        </label>
        <input type="date" name="end_date" id="end_date_exp" required />

        <label htmlFor="location" id="location_exp_input">
          Location
        </label>
        <input
          type="text"
          id="location_exp"
          name="location"
          placeholder="Location"
          required
        />
        <button type="button" onClick={toggleForm} id="exp_cancel">
          Cancel
        </button>
        <button type="submit" id="exp_save">
          Save
        </button>
      </form>
    </div>
  );
}
function ExperienceList({ experience, experience_remove }) {
  return (
    <div id="experience_list">
      {experience.map((item) => (
        <div className="experience_item" key={item.unique_id}>
          <p>{item.company}</p>
          <button
            className="exp_view"
            onClick={() => experience_remove(item.unique_id)}
          >
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
              className="feather feather-trash-2"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Experience;
