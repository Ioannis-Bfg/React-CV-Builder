import PersonalDetails from "./personal";
import Education from "./education";
import Experience from "./experience";
import CV from "./cvpage";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const handleChangeInput = (event) => {
    setFullName(event.target.value);
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
    };
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
    };
    setExperience((prevExperience) => [...prevExperience, ExpformData]);
  };

  const addEducationObject = () => {
    const educationObject = {
      school: "Example School",
      degree: "Example Degree",
      start_date: "2021-01-01",
      end_date: "2022-12-31",
      location: "Example Location",
    };
    setEducation((prevEducation) => [...prevEducation, educationObject]);
    console.log(education);
  };

  return (
    <div className="App">
      <div id="inputs">
        <PersonalDetails
          handleChangeName={handleChangeInput}
          handleChangeEmail={handleChangeEmail}
          handleChangePhone={handleChangePhone}
          handleChangeAddress={handleChangeAddress}
        />
        <Education handleSave={handleSave} />
        <Experience handleExpSave={handleExpSave} />
      </div>
      <div id="page">
        <button onClick={addEducationObject}>Add Education Object</button>
        <CV
          fullName={fullName}
          email={email}
          phone={phone}
          address={address}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}

export default App;
