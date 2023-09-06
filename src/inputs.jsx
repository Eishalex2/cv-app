export default function Input({ title, type, id, onChange, value, "data-key": dataKey}) {

  return (
    <div className="input">
      <label htmlFor={id}>{title}</label>
      <input 
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        data-key={dataKey}
      />
    </div>
  )
}