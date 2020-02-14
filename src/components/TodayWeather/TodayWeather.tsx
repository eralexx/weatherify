import * as React from "react";
import { TodaysData } from "../../entities/types";

const TodayWeather = (props: { data: TodaysData }) => {
  const { data } = props;

  return (
    <div className="today-weather">
      <div>Clouds: {data.clouds.all}</div>
      <div>Min Temp: {data.main.temp_min}</div>
      <div>Max Temp: {data.main.temp_max}</div>
      <div>Actual: {data.main.temp}</div>
      <div>Wind Speed: {data.wind.speed}</div>
      <div>Wind Direction: {data.wind.deg}</div>
      <div>Clouds: {data.clouds.all}</div>
      <div>Location: {data.name}</div>
    </div>
  );
};

export default TodayWeather;
