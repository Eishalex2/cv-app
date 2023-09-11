import { PropTypes } from 'prop-types';

export default function Button({ onClick, text, classLabel }) {
  return (
    <>
      <button className={classLabel} onClick={onClick}>{text}</button>
    </>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  classLabel: PropTypes.string
}