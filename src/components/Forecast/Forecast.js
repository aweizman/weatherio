import React, {useState} from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});

    function getForecast() {

        
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=seattle`, {
	    "method": "GET",
	    "headers": {
	    	"x-rapidapi-key": "7a3fb02a9dmshe70a5be7e202a2fp134b76jsn01c0f1bfde9b",
	    	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	        }
        })
        .then(response => response.json())
        .then(response => {
           setResponseObj(response)
        })
        .then(response => {
	    console.log(response);
        })
        .catch(err => {
	        console.error(err);
        });

    }


    return (

        <div>
           <h2>Find Current Weather Conditions</h2>
           <form id="place">
                City: <input type="text" name="input"></input>
            </form>
            <br></br>
           <button onClick={getForecast}>Get Forecast</button>
           <Conditions
                responseObj={responseObj}
            />
        </div>

    )

}


export default Forecast;