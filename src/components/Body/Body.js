import React, { useEffect, useState } from 'react';
function Body(props) {
    const [name, setName] = useState("");
    const nameChange = (event) => {
        setName(event.target.value);
    }
    const [data, setData] = useState(null);
    const [cityname, setCityName] = useState("");
    const [icon, setIcon] = useState([])
    useEffect(() => {
        const fetchapi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=f3ec87095dbda64c03300c0beec3e79a`;
            const response = await fetch(url);
            const resJson = await response.json();
            setData(resJson.main);
            setCityName(resJson.name);
            setIcon(resJson.weather);
        }
        fetchapi();
        console.clear();
    }, [name]);
    return (
        <>
            <div className="container input-group mb-3 my-3">
                <input type="text" onChange={nameChange} value={name} className="form-control" placeholder="Enter City..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search!</button>
            </div>
            {!data ? (<p className="text-center">No data found, please check city name correctly!</p>) :
                <>
                    <div className="container">
                        <div className="container mb-3 my-3 border">
                            <h1 className="text-center my-2">{cityname}</h1>
                            <h3 className="text-center my-2">{props.unit === "°C" ? Math.round(data.temp_min - 273.15) : Math.round(((data.temp_min - 273.15) * 1.8) + 32)} {props.unit}</h3>
                            <h1 className="text-center my-2">{icon === undefined ? "No Icon" : <img src={`https://openweathermap.org/img/wn/${icon[0].icon}@2x.png`} alt="..." />}</h1>
                            <h4 className="text-center my-2">{icon === undefined ? "No Icon" : icon[0].main}</h4>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
export default Body
