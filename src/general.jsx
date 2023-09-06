import Input from "./inputs"

export default function GeneralInput({ onChange, fullName, email, phone, address }) {

  return (
    <form className="general-info">
      <h1>General Information</h1>
      <Input
        title="Full name"
        type="text"
        id="full-name"
        onChange={onChange}
        value={fullName}
        data-key="fullName"
      />


    </form>
  )
}