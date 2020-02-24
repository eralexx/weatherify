import IWeatherResponse from "../entities/IWeatherReponse";
import UnitsList from "../entities/Units";
import { List } from "../entities/IForecastResponse";

interface IGlobalState {
  Loaded: boolean;
  CurrentWeather: IWeatherResponse;
  Forecast: List[];
  Units: UnitsList;
  ToggleUnits: () => void;
}

export default IGlobalState;
