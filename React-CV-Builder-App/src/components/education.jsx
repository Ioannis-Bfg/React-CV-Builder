import "../styles/education.css";
import React, { useState } from "react";

function Education({ handleSave, education, education_remove }) {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const educationListStyle = {
    display: education.length > 0 ? "block" : "none",
  };

  // dropdownButton.addEventListener("click", () => {
  //   dropdownContent.classList.toggle("expanded");
  // });

  const dropdown = () => {
    const dropdownContent = document.querySelector("#dropdown_content");
    const edu_dropdown_icon = document.querySelector("#edu_dropdown_icon");
    const header_education = document.querySelector("#header_education");
    dropdownContent.classList.toggle("expanded");
    edu_dropdown_icon.classList.toggle("rotated");
    header_education.classList.toggle("rounded");
  };

  return (
    <div id="education">
      <div id="header_education" onClick={dropdown}>
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
        <button id="edu_dropdown">
          <svg
            id="edu_dropdown_icon"
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
        </button>
      </div>
      <div id="dropdown_content">
        {showForm ? (
          <AddEducationForm handleSave={handleSave} toggleForm={toggleForm} />
        ) : (
          <>
            <div id="education_list" style={educationListStyle}>
              <EducationList
                education={education}
                education_remove={education_remove}
              />
            </div>
            <AddEducation handleSwitch={toggleForm} />
          </>
        )}
      </div>
    </div>
  );
}

function AddEducation({ handleSwitch }) {
  return (
    <div id="add_education_button_wrapper">
      <button id="add_education_button" onClick={handleSwitch}>
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
        Education
      </button>
    </div>
  );
}

function AddEducationForm({ handleSave, toggleForm }) {
  function handleSubmit(event) {
    event.preventDefault();
    handleSave(event);
    toggleForm();
  }

  function handleCancel(event) {
    event.preventDefault();
    toggleForm();
  }
  return (
    <div id="add_education_form">
      <form onSubmit={handleSubmit} id="education_form">
        <label htmlFor="school" id="school_input">
          <span>School</span>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="School Name"
            required
          />
        </label>

        <label htmlFor="degree" id="degree_input">
          <span>Degree</span>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Degree Obtained"
            required
          />
        </label>

        <label
          htmlFor="start_date"
          id="start
          _date_input"
        >
          <span>Start Date</span>
          <input type="date" name="start_date" id="start_date" required />
        </label>

        <label htmlFor="end_date" id="end_date_input">
          <span>End Date</span>
          <input type="date" name="end_date" id="end_date" required />
        </label>

        <label htmlFor="location" id="location_input">
          <span>Location</span>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            required
          />
        </label>

        <button type="button" id="edu_cancel" onClick={toggleForm}>
          Cancel
        </button>
        <button type="submit" id="edu_save">
          Save
        </button>
      </form>
    </div>
  );
}
function EducationList({ education, education_remove }) {
  return (
    <div id="education_list">
      {education.map((item) => (
        <div className="education_item" key={item.unique_id}>
          <p>{item.school}</p>
          <button
            className="edu_view"
            onClick={() => education_remove(item.unique_id)}
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

export default Education;
