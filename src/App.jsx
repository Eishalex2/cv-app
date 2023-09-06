import { useState } from 'react'
import './styles/App.css'
import GeneralInput from './general'
import exampleData from '../example';

function App() {

  const [general, setGeneral] = useState(exampleData.generalInfo);

  const handleGeneralChange = (e) => {
    const { key } = e.target.dataset;
    setGeneral({...general, [key]: e.target.value});
  }

  return (
    <div className="wrapper">
      <section className="input-sections">
        <GeneralInput
          onChange={handleGeneralChange}
          fullName={general.fullName}
          email={general.email}
          phone={general.phone}
          address={general.address}
        />
      </section>

      <section className="display">
        Display
      </section>
    </div>
  )
}

export default App
