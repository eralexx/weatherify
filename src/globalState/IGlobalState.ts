import IWeatherResponse from "../entities/IWeatherReponse";

interface IGlobalState {
  Loaded: boolean;
  Forecast: IWeatherResponse;
}

export default IGlobalState;
