import getWeatherData from "./Functions";
import { useState, useEffect } from 'react';
import { favoritesData } from "./Data";
import ErrorBoundary from "./ErrorBoundary";

const Home = (props) => {
    const [weather, setWeather] = useState({
        minTempCel: '',
        maxTempCel: '',
        description: '',
        city: '',
        countryCode: ''
    });

    const [inputs, setInputs] = useState({
        city: '',
        countryCode: ''
    });

    useEffect(() => {
        const fetchWeatherData = async () => {
            const weatherData = await getWeatherData('Tel Aviv', 'IL');
            setWeather({
                minTempCel: weatherData.minTempCel,
                maxTempCel: weatherData.maxTempCel,
                description: weatherData.description,
                city: weatherData.city,
                countryCode: weatherData.countryCode
            });
        };

        fetchWeatherData();
    }, [favoritesData]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        const newInputs = {...inputs};
        newInputs[name] = value;
        console.log(newInputs);
        setInputs(newInputs);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        if (inputs.city === ''|| inputs.countryCode === '') {
            return;
        }
        const {city, countryCode} = inputs;
        const newWeather = await getWeatherData(city, countryCode);
        setWeather(newWeather);
    };

    const [favorites, setFavorites] = useState([]);

    const isInFavorites = (city, countryCode) => {
        return favoritesData.some(favorite => 
            favorite.city === city && favorite.countryCode === countryCode
        );
    };

    const addToFavorites = (city, countryCode) => {
        if (inputs.city === ''|| inputs.countryCode === '') {
            return;
        }
        setFavorites(favoritesData.push({city, countryCode}));
        console.log(favoritesData);
    };

    return (
        <>
            <h1>Search for a city</h1>
            <ErrorBoundary>
                <form>
                    <input onInput={(e) => {handleInput(e)}} type="text" name='city' placeholder="city" />
                    <input onInput={(e) => {handleInput(e)}} type="text" name='countryCode' placeholder="country code" />
                    <button className="searchButton" onClick={(e) => {handleClick(e)}}>Search Weather</button>
                </form>
            <div className="weatherDisplay"></div>
                <h2>{weather.city}, {weather.countryCode}</h2>
                <p>{weather.description}</p>
                <p><span>Min.: {weather.minTempCel} °C</span> <span>Max.: {weather.maxTempCel} °C</span></p>
            {isInFavorites(weather.city, weather.countryCode) ? '' : <button className="favoritesButton" onClick={() => addToFavorites(weather.city, weather.countryCode)}>Add to Favorites</button>}
            <div className="weatherDisplay"></div>
            </ErrorBoundary>
        </>
    );
}
 
export default Home;