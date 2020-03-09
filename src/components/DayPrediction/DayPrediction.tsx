import * as React from "react";
import { List } from "../../entities/IForecastResponse";
import "./DayPrediction.css";

const DayPrediction = ({ data }: { data: List }) => {
  return (
    <div className="custom-card">
      <h3 className="title">Temperature: {data.main.temp}</h3>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>
      <div className="circle">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle className="stroke" cx="60" cy="60" r="50" />
        </svg>
      </div>
    </div>
  );
};

export default DayPrediction;
