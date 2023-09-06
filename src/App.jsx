import GeneralInfoInput from "./components/generalInfo";
import WorkInput from "./components/work";
import Education from "./components/education";
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

      </section>
    </div>
  )
}