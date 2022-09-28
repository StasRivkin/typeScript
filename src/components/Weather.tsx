import React from 'react';
import { WeatherInfo } from '../units/types';

interface Props{
  info:WeatherInfo;
};

const Weather = ({info}: Props) => {
  return (
    <div className='infoWeath'>
      {!info.message &&
        <div>
          <p>Location: {info.country}, {info.city}</p>
          <p>Temp: {info.temp}</p>
          <p>Pressure: {info.pressure}</p>
          <p>Sunset: {new Date(info.sunset! * 1000).toLocaleTimeString()}</p>
        </div>}
      <p>{info.message}</p>
    </div>
  )

}

export default Weather