import PersonalDetails from "./personal";
import Education from "./education";
import Experience from "./experience";
import CV from "./cvpage";
import { useState } from "react";
import html2canvas from "html2canvas";
import "../styles/app.css";
import Menu from "./menu";

function App() {
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

  return (
    <div className="App">
      <div id="inputs">
        <Menu handleReset={handleReset} handleExport={handleExportImage} />
        <PersonalDetails
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
      <div id="test_buttons">
        <button onClick={addEducationObject}>Add Education Object</button>
        <button onClick={addExperienceObject}>Add Experience Object</button>
        <button onClick={handleReset}>Reset</button>
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
    </div>
  );
}

export default App;
