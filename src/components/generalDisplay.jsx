import { PropTypes } from 'prop-types';

export default function GeneralDisplay({ fullName, email, phone, address }) {

  return (
    <>
      <h1>{fullName}</h1>
      <ul>
        <li>{email}</li>
        <li className="phone">{phone}</li>
        <li className="address">{address}</li>
      </ul>
    </>
  )
}

GeneralDisplay.propTypes = {
  fullName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string
}