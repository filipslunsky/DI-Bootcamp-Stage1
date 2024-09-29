import { favoritesData } from "./Data";
import getWeatherData from "./Functions";
import { useState, useEffect } from 'react';
import ErrorBoundary from "./ErrorBoundary";

const Favorites = (props) => {
    const [weathers, setWeathers] = useState([]);

    const getWeatherForFavorites = async () => {
        const weatherArray = [];
        for (let i = 0; i < favoritesData.length; i++) {
            const weatherData = await getWeatherData(favoritesData[i].city, favoritesData[i].countryCode);
            weatherArray.push(weatherData);
            console.log(weatherArray);
        }
        return weatherArray;
    };

    useEffect(() => {
        const fetchWeatherData = async () => {
            const weatherData = await getWeatherForFavorites();
            setWeathers(weatherData); 
        };
        
        fetchWeatherData(); 
    }, []);

    const removeLocation = (city, countryCode) => {
        const updatedWeathers = weathers.filter(item => 
            !(item.city === city && item.countryCode === countryCode)
        );
        setWeathers(updatedWeathers);
    };

    return (
        <>
            <h2>Weather in Favorite Cities</h2>
            {weathers.length === 0 ? <p>You have no favorite locations</p> : ''}
            {
                weathers.map((item, index) => {
                    return (
                        <div key={index}>
                            <ErrorBoundary>
                                <h2>{item.city}, {item.countryCode}</h2>
                                <p>{item.description}</p>
                                <p><span>Min.: {item.minTempCel} °C</span> <span>Max.: {item.maxTempCel} °C</span></p>
                                <button onClick={() => removeLocation(item.city, item.countryCode)}>Remove from favorites</button>
                            </ErrorBoundary>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Favorites;
