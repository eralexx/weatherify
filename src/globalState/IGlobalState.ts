import IWeatherResponse from "../entities/IWeatherReponse";
import Units from "../entities/Units";

interface IGlobalState {
  Loaded: boolean;
  Forecast: IWeatherResponse;
  Units: Units;
  ToggleUnits: () => void;
}

export default IGlobalState;
