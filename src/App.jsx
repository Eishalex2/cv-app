import GeneralInfoInput from "./components/generalInfo";
import WorkInput from "./components/work";
import Education from "./components/education";
import GeneralDisplay from "./components/generalDisplay";
import WorkDisplay from "./components/workDisplay";
import EducationDisplay from "./components/educationDisplay";
import exampleData from "./example";
import { useState } from 'react';
import './styles/App.css';


export default function App() {

  const [general, setGeneral] = useState(exampleData.generalInfo);
  const [work, setWork] = useState(exampleData.workInfo);
  const [education, setEducation] = useState(exampleData.educationInfo);

  const handleGeneralChange = (e) => {
    setGeneral({...general, [e.target.name]: e.target.value});
  }

  const handleWorkChange = (e) => {
    setWork({...work, [e.target.name]: e.target.value});
  }

  const handleEducationChange = (e) => {
    setEducation({...education, [e.target.name]: e.target.value})
  }

  return (
    <div className="wrapper">
      <section className="input-sections">
        <GeneralInfoInput
          fullName = {general.fullName}
          email = {general.email}
          phone = {general.phone}
          address = {general.address}
          onChange = {handleGeneralChange}
        />

        <WorkInput
          company = {work.company}
          position = {work.position}
          start = {work.start}
          end = {work.end}
          location = {work.location}
          description = {work.description}
          onChange = {handleWorkChange}
        />

        <Education
          school = {education.school}
          degree = {education.degree}
          start = {education.start}
          end = {education.end}
          location = {education.location}
          onChange = {handleEducationChange}
        />

      </section>

      <section className="display">
        <header className="general-display">
          <GeneralDisplay
            fullName = {general.fullName}
            email = {general.email}
            phone = {general.phone}
            address = {general.address}
          />
        </header>
        <div className="work-display">
          <h2>Work Experience</h2>
            <WorkDisplay
              company = {work.company}
              position = {work.position}
              startDate = {work.start}
              endDate = {work.end}
              location = {work.location}
              description = {work.description}
            />
        </div>
        <div className="edu-display">
          <h2>Education</h2>
            <EducationDisplay
              school = {education.school}
              degree = {education.degree}
              startDate = {education.start}
              endDate = {education.end}
              location = {education.location}
            />
        </div>

      </section>
    </div>
  )
}