import IWeatherResponse from "./IWeatherReponse";

export type TodaysData = Pick<
  IWeatherResponse,
  "main" | "name" | "clouds" | "wind" | "name"
>;
