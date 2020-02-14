import IWeatherResponse from "../entities/IWeatherReponse";
import UnitsList from "../entities/Units";

interface IGlobalState {
  Loaded: boolean;
  Forecast: IWeatherResponse;
  Units: UnitsList;
  ToggleUnits: () => void;
}

export default IGlobalState;
