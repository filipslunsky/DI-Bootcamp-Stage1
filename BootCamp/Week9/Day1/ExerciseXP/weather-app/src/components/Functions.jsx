const apiKey = 'zr2QnUr6Td46j6QSDKzC67PcJGPU8ly4';

    const getLocationKey = async (city, countryCode) => {
        try {
            const res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}&countryCode=${countryCode}`);
            const data = await res.json();
            const locationKey = data[0].Key;
            return locationKey; 
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    const getWeathedDataForLocationKey = async (locationKey) => {
        try {
            const res = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${apiKey}&details=true`);
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    const convertFahrenheitToCelsius = (numberFahrenheit) => {
        const numberCelsius = (numberFahrenheit - 32) * 5 / 9;
        return Math.round(numberCelsius * 100) / 100;
    };

    const getWeatherData = async (city, countryCode) => {
        try {
            const locationKey = await getLocationKey(city, countryCode);
            const weatherData = await getWeathedDataForLocationKey(locationKey);
            const description = weatherData.DailyForecasts[0].Day.IconPhrase;
            const minTempFahr = weatherData.DailyForecasts[0].Temperature.Minimum.Value;
            const maxTempFahr = weatherData.DailyForecasts[0].Temperature.Maximum.Value;
            const minTempCel = convertFahrenheitToCelsius(minTempFahr);
            const maxTempCel = convertFahrenheitToCelsius(maxTempFahr);
            console.log([minTempCel, maxTempCel, description, city, countryCode]);
        return {minTempCel, maxTempCel, description, city, countryCode};
        } catch (error) {
            console.log(error);
            return {minTempCel: 'not found', maxTempCel: 'not found', description: 'not found', city, countryCode};;
        }
        
    };

export default getWeatherData;