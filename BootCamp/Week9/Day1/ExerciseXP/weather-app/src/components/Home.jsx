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
        setFavorites(favoritesData.push({city, countryCode}));
        console.log(favoritesData);
    };

    return (
        <>
            <h2>{weather.city}, {weather.countryCode}</h2>
            <p>{weather.description}</p>
            <p><span>Min.: {weather.minTempCel} °C</span> <span>Max.: {weather.maxTempCel} °C</span></p>

            {isInFavorites(weather.city, weather.countryCode) ? '' : <button onClick={() => addToFavorites(weather.city, weather.countryCode)}>Add to Favorites</button>}
            <ErrorBoundary>
                <form>
                    <input onInput={(e) => {handleInput(e)}} type="text" name='city' placeholder="city" />
                    <input onInput={(e) => {handleInput(e)}} type="text" name='countryCode' placeholder="country code" />
                    <button onClick={(e) => {handleClick(e)}}>Search Weather</button>
                </form>
            </ErrorBoundary>
        </>
    );
}
 
export default Home;