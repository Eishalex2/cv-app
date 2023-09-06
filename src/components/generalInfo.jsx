import { Input } from "./inputs";
import { PropTypes } from 'prop-types';

export default function GeneralInfoInput({fullName, email, phone, address, onChange}) {

  return (
    <form className="general">
      <h1>General Information</h1>
        <Input
          id="full-name"
          labelName="Full name"
          type="text"
          value={fullName}
          onChange={onChange}
          name="fullName"
        />
        <Input
          id="email"
          labelName="Email"
          type="email"
          value={email}
          onChange={onChange}
          name="email"
        />
        <Input
          id="phone"
          labelName="Phone number"
          type="tel"
          value={phone}
          onChange={onChange}
          name="phone"
        />
        <Input
          id="address"
          labelName="Address"
          type="text"
          value={address}
          onChange={onChange}
          name="address"
        />
    </form>
  )
}

GeneralInfoInput.propTypes = {
  fullName: PropTypes.string,
  onChange: PropTypes.func,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string
}