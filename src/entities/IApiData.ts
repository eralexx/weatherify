import { List } from "./IForecastResponse";
import IWeatherResponse from "./IWeatherReponse";

export default interface IApiData {
  forecasts: List[];
  current: IWeatherResponse;
}
