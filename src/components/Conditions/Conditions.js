import React from 'react'

const Conditions = (props) => {

    return (



        <div>
 
            {props.responseObj.cod === 200 ?
                
                <div>
 
                    <p><strong>{props.responseObj.name}</strong></p>
                        
                    <p>It is currently {Math.round(parseFloat((props.responseObj.main.temp)-279.13)*1.8 + 32)} degrees Fahrenheit out with {props.responseObj.weather[0].description}.</p>
 
                </div>
                
 
            : null
 
            }
 
        </div>
 
    )

}

export default Conditions;