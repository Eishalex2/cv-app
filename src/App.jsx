import GeneralInfoInput from "./components/generalInfo";
import WorkInput from "./components/work";
import Education from "./components/education";
import GeneralDisplay from "./components/generalDisplay";
import WorkDisplay from "./components/workDisplay";
import EducationDisplay from "./components/educationDisplay";
import Compressed from "./components/compressedView";
import exampleData from "./example";
import { useState } from 'react';
import './styles/App.css';


export default function App() {

  const [general, setGeneral] = useState(exampleData.generalInfo);
  const [work, setWork] = useState(exampleData.workInfo);
  const [education, setEducation] = useState(exampleData.educationInfo);
  const [inputView, setInputView] = useState('form');

  const handleGeneralChange = (e) => {
    setGeneral({...general, [e.target.name]: e.target.value});
  }

  const handleWorkChange = (e) => {
    setWork({...work, [e.target.name]: e.target.value});
  }

  const handleEducationChange = (e) => {
    setEducation({...education, [e.target.name]: e.target.value})
  }

  const handleEdit = () => {
    setInputView(inputView === 'form' ? 'compressed' : 'form');
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

        {inputView === 'form' && (
          <WorkInput
            company = {work.company}
            position = {work.position}
            start = {work.start}
            end = {work.end}
            location = {work.location}
            description = {work.description}
            onChange = {handleWorkChange}
            onClick = {handleEdit}
          />
        )}

        {inputView === 'compressed' && (
          <Compressed
            text = {work.company}
            handleEdit = {handleEdit}
            heading = "Work Experience"
          />
        )}

        {inputView === 'form' && (
          <Education
            school = {education.school}
            degree = {education.degree}
            start = {education.start}
            end = {education.end}
            location = {education.location}
            onChange = {handleEducationChange}
            onClick = {handleEdit}
          />
        )}

        {inputView === 'compressed' && (
          <Compressed
            text = {education.school}
            handleEdit = {handleEdit}
            heading = "Education"
          />
        )}


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