import { PropTypes } from 'prop-types';

export default function WorkDisplay({ company, position, startDate, endDate, location, description }) {
  return (
    <div className="work-block">
      <ul>
        <li className="company">{company}</li>
        <li className="position">{position}</li>
        <li className="dates">{startDate} - {endDate}</li>
        <li className="location">{location}</li>
      </ul>
      <p className="description">{description}</p>
    </div>
  )
}

WorkDisplay.propTypes = {
  company: PropTypes.string,
  position: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string
}