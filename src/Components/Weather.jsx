import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
import { useEffect } from 'react'
const Weather = () => {

    const search = async (city) =>{
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;

            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        search("London");
    },[])

    return (
        <>
            <div className='weather'>
                <div className='search-bar'>
                    <input type="text" placeholder='Search' />
                    <img src={search_icon} alt="search_icon" />
                </div>
                <img src={clear_icon} alt="clear_icon" className='weather-icon' />
                <p className='temp'>16°c</p>
                <p className='location'>London</p>
                <div className="weather-data">
                    <div className='col'>
                        <img src={humidity_icon} alt="humidity_icon" />
                        <div>
                            <p>91 %</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className='col'>
                        <img src={wind_icon} alt="wind_icon" />
                        <div>
                            <p>3.6 Km/h</p>
                            <span>Wind speed</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather;