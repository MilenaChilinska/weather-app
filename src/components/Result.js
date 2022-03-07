import React from 'react';

function Result(props) {

    const{err, city, temp, humidity, date} = props.weather;

    let content = null;

    if(!err && city) {
        content = (
            <div>
                <div>
                    <h3 className='city-name'>{city}</h3>
                </div>
                <div className="bottom">
                    <div className="headings">
                        <p>Data: </p>
                        <p>Temperatura: </p>
                        <p>Humidity: </p>
                    </div>
                    <div className="weather-info">
                        <p className="weather">{date}</p>
                        <p className="temperature">{temp} &#176;C</p>
                        <p className="pressure">{humidity} %</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
        <div>
        {err ? "Can't find a city!" : content}
        </div>
        </>
    );
}

export default Result;