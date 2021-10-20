import React, {useState} from 'react'
import Body from '../Body';

function Navbar() {

  const [unit, setUnit] = useState("°C");
  const clickedUnitBtn = () => {
    unit === "°C" ? setUnit("°F") : setUnit("°C");
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Weather App</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex">
            <button onClick={clickedUnitBtn} className="btn btn-outline-info text-center">{unit}</button>
          </div>
        </div>
    </nav>
    <Body unit={unit} />
    </>
  )
}

export default Navbar
