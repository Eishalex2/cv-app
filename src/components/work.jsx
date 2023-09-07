import { Input, TextArea } from './inputs';
import { PropTypes } from 'prop-types'

export default function WorkInput({company, position, start, end, location, description, onChange}) {
  
  return (
    <form className="work">
      <h1>Work Experience</h1>
        <Input
          id="company"
          labelName = "Company name"
          type="text"
          value={company}
          onChange={onChange}
          name="company"
        />
        <Input
          id="position"
          labelName = "Position"
          type="text"
          value={position}
          onChange={onChange}
          name="position"
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
        <TextArea
          id="description"
          labelName="Description"
          value={description}
          onChange={onChange}
          name="description"
        />
    </form>
  )
}

WorkInput.propTypes = {
  company: PropTypes.string,
  position: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  location: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string
}