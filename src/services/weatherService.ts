import axios from "axios";
import IWeatherResponse from "../entities/IWeatherReponse";
import UnitsList from "../entities/Units";

const apiKey: string = "b5eef92c5c7ad483322050c8885761ff";
const rootServiceUrl: string =
  "https://api.openweathermap.org/data/2.5/weather";

class WeatherService {
  public static getWeatherByCoords = (
    latitude: number,
    longitude: number,
    units: UnitsList
  ): Promise<IWeatherResponse> => {
    return new Promise<IWeatherResponse>((resolve, reject) => {
      axios
        .get(
          rootServiceUrl +
            `?lon=${longitude}&lat=${latitude}&appid=${apiKey}&units=${units}`
        )
        .then(({ data }: { data: IWeatherResponse }) => {
          resolve(data);
        })
        .catch(error => reject(error));
    });
  };

  public static getWeatherByCityName = (locationName: string) => {
    return new Promise<IWeatherResponse>((resolve, reject) => {
      axios
        .get(rootServiceUrl + `?q=${locationName}&appid=${apiKey}&units=metric`)
        .then(({ data }: { data: IWeatherResponse }) => {
          resolve(data);
        })
        .catch(error => reject(error));
    });
  };
}

export default WeatherService;
