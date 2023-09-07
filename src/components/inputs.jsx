import { PropTypes } from 'prop-types';

function Input({id, labelName, type, value, onChange, name}) {

  return (
    <div className="input">
      <label htmlFor={id}>{labelName}</label>
      <input 
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  )
}

function TextArea({id, labelName, value, name, onChange}) {

  return (
    <div className="text-area">
      <label htmlFor={id}>{labelName}</label>
      <textarea 
        name={name} 
        id={id}
        value={value}
        onChange={onChange} 
        cols="30" 
        rows="6">
      </textarea>
    </div>
  )
}

export { Input, TextArea }

Input.propTypes = {
  id: PropTypes.string,
  labelName: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string
}

TextArea.propTypes = {
  id: PropTypes.string,
  labelName: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}