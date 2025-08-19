import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";
import "./styles/generalInfo.css";
import "./styles/education.css";
import "./styles/experience.css";
import "./styles/App.css";
import { useState } from "react";

export default function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
    isEditing: true,
  });

  const [education, setEducation] = useState({
    school: "",
    studyTitle: "",
    studyDate: "",
    isEditing: true,
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
    isEditing: true,
  });

  // Generic helpers
  const updateSection = (setter) => (field, value) =>
    setter((prev) => ({ ...prev, [field]: value }));

  const toggleEdit = (setter, value) => setter((prev) => ({ ...prev, isEditing: value }));

  return (
    <main className="cv-app">
      <h1>CV Builder</h1>

      <div className="cv-layout">
        <div>
          <GeneralInfo
            data={general}
            onChange={updateSection(setGeneral)}
            onSubmit={() => toggleEdit(setGeneral, false)}
            onEdit={() => toggleEdit(setGeneral, true)}
          />
          <Education
            data={education}
            onChange={updateSection(setEducation)}
            onSubmit={() => toggleEdit(setEducation, false)}
            onEdit={() => toggleEdit(setEducation, true)}
          />
          <Experience
            data={experience}
            onChange={updateSection(setExperience)}
            onSubmit={() => toggleEdit(setExperience, false)}
            onEdit={() => toggleEdit(setExperience, true)}
          />
        </div>

        <Preview general={general} education={education} experience={experience} />
      </div>
    </main>
  );
}
