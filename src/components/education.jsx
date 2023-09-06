import { Input } from './inputs';
import { PropTypes } from 'prop-types';

export default function Education({school, degree, start, end, location, onChange}) {

  return (
    <form className="education">
      <h1>Education</h1>
        <Input
          id="school"
          labelName = "School"
          type="text"
          value={school}
          onChange={onChange}
          name="school"
        />
        <Input
          id="degree"
          labelName = "Degree"
          type="text"
          value={degree}
          onChange={onChange}
          name="degree"
        />
        <Input
          id="start-date"
          labelName = "Start Date"
          type="text"
          value={start}
          onChange={onChange}
          name="start"
        />
        <Input
          id="end-date"
          labelName = "End Date"
          type="text"
          value={end}
          onChange={onChange}
          name="end"
        />
        <Input
          id="location"
          labelName = "Location"
          type="text"
          value={location}
          onChange={onChange}
          name="location"
        />
    </form>
  )
}

Education.propTypes = {
  school: PropTypes.string,
  degree: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  location: PropTypes.string,
  onChange: PropTypes.func
}