import { PropTypes } from 'prop-types';

export default function EducationDisplay({ school, degree, startDate, endDate, location }) {

  return (
    <div className="education-block">
      <ul>
        <li className="school">{school}</li>
        <li className="degree">{degree}</li>
        <li className="dates">{startDate} - {endDate}</li>
        <li className="location">{location}</li>
      </ul>
    </div>
  )
}
EducationDisplay.propTypes = {
  school: PropTypes.string,
  degree: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  location: PropTypes.string,
}