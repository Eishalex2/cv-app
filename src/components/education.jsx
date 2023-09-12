import { Input } from './inputs';
import { PropTypes } from 'prop-types';
import Button from './buttons';

export default function Education({school, degree, start, end, location, onChange, onClick}) {

  return (
    <form>
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
        <div className="dates">
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
        </div>
        <Input
          id="location"
          labelName = "Location"
          type="text"
          value={location}
          onChange={onChange}
          name="location"
        />
        <Button
          onClick={onClick}
          text="Save"
          classLabel="save"
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
  onChange: PropTypes.func,
  onClick: PropTypes.func
}