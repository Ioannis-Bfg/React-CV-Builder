import PersonalDetails from "./personal";
import Education from "./education";
import Experience from "./experience";
import CV from "./cvpage";
import { useState } from "react";
import html2canvas from "html2canvas";
import "../styles/app.css";
import sample from "../assets/sample_prof.jpg?url";
import Menu from "./menu";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    addDefaultProfile();
  }, []);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [previewSrc, setPreviewSrc] = useState("");

  const handleChangeInput = (event) => {
    setFullName(event.target.value);
  };
  const toggleEducationForm = () => {
    setShowEducationForm((prevShow) => !prevShow);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const formData = {
      school: event.target.school.value,
      degree: event.target.degree.value,
      start_date: event.target.start_date.value,
      end_date: event.target.end_date.value,
      location: event.target.location.value,
      unique_id: crypto.getRandomValues(new Uint32Array(1))[0],
    };
    event.target.reset();
    setEducation((prevEducation) => [...prevEducation, formData]);
  };

  const handleExpSave = (event) => {
    event.preventDefault();
    const ExpformData = {
      company: event.target.company.value,
      position: event.target.position.value,
      start_date: event.target.start_date.value,
      end_date: event.target.end_date.value,
      location: event.target.location.value,
      unique_id: crypto.getRandomValues(new Uint32Array(1))[0],
    };
    event.target.reset();
    setExperience((prevExperience) => [...prevExperience, ExpformData]);
  };

  const addEducationObject = () => {
    const educationObject = {
      school: "Example School",
      degree: "Example Degree",
      start_date: "01/2020",
      end_date: "12/2020",
      location: "Example Location",
      unique_id: crypto.getRandomValues(new Uint32Array(1))[0],
    };

    setEducation((prevEducation) => [...prevEducation, educationObject]);
  };

  const addExperienceObject = () => {
    const experienceObject = {
      company: "Example Company",
      position: "Example Position",
      start_date: "01-2020",
      end_date: "12-2020",
      location: "Example Location",
      unique_id: crypto.getRandomValues(new Uint32Array(1))[0],
    };

    setExperience((prevExperience) => [...prevExperience, experienceObject]);
    console.log(experience);
  };

  const education_remove = (unique_id) => {
    console.log(unique_id);
    setEducation((prevEducation) =>
      prevEducation.filter((item) => item.unique_id !== unique_id)
    );
  };

  const experience_remove = (unique_id) => {
    console.log(unique_id);
    setExperience((prevExperience) =>
      prevExperience.filter((item) => item.unique_id !== unique_id)
    );
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setEducation([]);
    setExperience([]);
    setShowEducationForm(false);
    setPreviewSrc("");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setPreviewSrc(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  function handleExportImage() {
    const pageElement = document.getElementById("page");

    // Trigger a reflow before capturing the content
    pageElement.offsetHeight; // Forces a reflow on the page

    html2canvas(pageElement, {
      scale: 4,
      backgroundColor: "#fff",
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const img = new Image();
      img.src = imgData;

      const link = document.createElement("a");
      link.download = "page_image.png";
      link.href = imgData;
      link.click();
    });
  }

  const addDefaultProfile = () => {
    handleReset();
    setFullName("Georgios Papadopoulos");
    setEmail("gpapadopoulos@gmail.com");
    setPhone("6943033615");
    setAddress("Thessaloniki, Greece");
    setPreviewSrc(sample);

    const exampleEducations = [
      {
        school: "University of Thessaloniki",
        degree: "Bachelor of Science in Computer Engineering",
        start_date: "09/2013",
        end_date: "07/2018",
        location: "Thessaloniki",
        unique_id: crypto.getRandomValues(new Uint32Array(1))[0],
      },
      {
        school: "University of Athens",
        degree: "Master of Science in Library and Information Science",
        start_date: "09/2018",
        end_date: "07/2020",
        location: "Athens",
        unique_id: crypto.getRandomValues(new Uint32Array(1))[0],
      },
    ];
    setEducation(exampleEducations);

    const exampleExperiences = [
      {
        company: "Tech4Greece",
        position: "Bachelor of Science in Computer Engineering",
        start_date: "07/2018",
        end_date: "09/2019",
        location: "Thessaloniki",
        unique_id: crypto.getRandomValues(new Uint32Array(1))[0],
      },
      {
        company: "Pythia Technologies",
        position: "Master of Science in Library and Information Science",
        start_date: "09/2020",
        end_date: "Present",
        location: "Athens",
        unique_id: crypto.getRandomValues(new Uint32Array(1))[0],
      },
      {
        company: "Greece Tech Hub",
        position: "Founder, Chairman",
        start_date: "09/2020",
        end_date: "Present",
        location: "Athens",
        unique_id: crypto.getRandomValues(new Uint32Array(1))[0],
      },
      {
        company: "Tech4Greece",
        position: "Founder, CEO",
        start_date: "09/2021",
        end_date: "Present",
        location: "Athens",
        unique_id: crypto.getRandomValues(new Uint32Array(1))[0],
      },
    ];
    setExperience(exampleExperiences);
  };

  return (
    <div className="App">
      <div id="customize">
        <button onClick={addDefaultProfile} id="default_profile_button">
          <p>Default Profile</p>
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
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </button>

        <button id="info_button">
          <p>Info</p>
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
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </button>
      </div>
      <div id="inputs">
        <Menu handleReset={handleReset} handleExport={handleExportImage} />
        <PersonalDetails
          fullName={fullName}
          email={email}
          phone={phone}
          address={address}
          handleChangeName={handleChangeInput}
          handleChangeEmail={handleChangeEmail}
          handleChangePhone={handleChangePhone}
          handleChangeAddress={handleChangeAddress}
          handleImageUpload={handleImageUpload}
        />
        <Education
          handleSave={handleSave}
          toggleForm={toggleEducationForm}
          education={education}
          education_remove={education_remove}
        />
        <Experience
          handleExpSave={handleExpSave}
          experience={experience}
          experience_remove={experience_remove}
        />
      </div>
      <div id="page">
        <CV
          fullName={fullName}
          email={email}
          phone={phone}
          address={address}
          education={education}
          experience={experience}
          previewSrc={previewSrc}
        />
      </div>
      <div id="footer">
        <p>Made by Ioannis-Bfg</p>
        <a
          href="https://github.com/Ioannis-Bfg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="30"
            height="30"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
