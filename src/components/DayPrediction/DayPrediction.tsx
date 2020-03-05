import * as React from "react";
import CustomCard from "../CustomCard";
import { List } from "../../entities/IForecastResponse";

const DayPrediction = ({ data }: { data: List }) => {
  return <CustomCard />;
};

export default DayPrediction;
