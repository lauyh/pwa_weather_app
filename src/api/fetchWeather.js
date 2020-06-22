import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "2a1550ec80fc5ed5181e3d4ec9e6ab78"


export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL,
    {
        params:
        {
            q: query,
            unit: 'metric',
            APPID: API_KEY
        }
    });
    return data;
}