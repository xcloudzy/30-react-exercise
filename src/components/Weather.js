import { useEffect, useState } from "react";

export const Weather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5899db3b994a8da2226abd59c428ab06`
                )
                    .then((response) => response.json())
                    .then((data) => setWeather(data));
            });
        }
    }, []);

    console.log(weather);

    return (
        <>
            <h1>Weather</h1>

            {weather ? (
                <div>
                    <p>Temperature : {weather.main.temp}</p>
                    <p>Conditions : {weather.weather[0].description}</p>
                </div>
            ) : (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </>
    );
};
