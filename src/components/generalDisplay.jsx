import { PropTypes } from 'prop-types';

export default function GeneralDisplay({fullName}) {

  return (
    <div className="general-display">
      <h1>{fullName}</h1>
    </div>
  )
}

GeneralDisplay.propTypes = {
  fullName: PropTypes.string
}