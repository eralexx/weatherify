import axios from "axios";
import IWeatherResponse from "../entities/IWeatherReponse";
import UnitsList from "../entities/Units";
import IApiData from "../entities/IApiData";
import { IForecastResponse } from "../entities/IForecastResponse";

const apiKey: string = "b5eef92c5c7ad483322050c8885761ff";
const rootServiceUrl: string = "https://api.openweathermap.org/data/2.5/";

class WeatherService {
  public static getWeatherDataByCoords = (
    latitude: number,
    longitude: number,
    units: UnitsList
  ): Promise<IApiData> => {
    return new Promise<IApiData>((resolve, reject) => {
      Promise.all([
        WeatherService.getCurrentWeatherByCoords(latitude, longitude, units),
        WeatherService.getForecastByCoords(latitude, longitude, units)
      ]).then(([current, forecasts]) => {
        const res: IApiData = {
          forecasts: forecasts.list,
          current
        };
        resolve(res);
      });
    });
  };

  private static getCurrentWeatherByCoords = (
    latitude: number,
    longitude: number,
    units: UnitsList
  ): Promise<IWeatherResponse> => {
    return new Promise<IWeatherResponse>((resolve, reject) => {
      axios
        .get(
          rootServiceUrl +
            `weather?lon=${longitude}&lat=${latitude}&appid=${apiKey}&units=${units}`
        )
        .then(({ data }: { data: IWeatherResponse }) => {
          resolve(data);
        })
        .catch(error => reject(error));
    });
  };

  private static getCurrentWeatherByCityName = (locationName: string) => {
    return new Promise<IWeatherResponse>((resolve, reject) => {
      axios
        .get(
          rootServiceUrl +
            `weather?q=${locationName}&appid=${apiKey}&units=metric`
        )
        .then(({ data }: { data: IWeatherResponse }) => {
          resolve(data);
        })
        .catch(error => reject(error));
    });
  };

  private static getForecastByCityName = (locationName: string) => {
    return new Promise<IForecastResponse>((resolve, reject) => {
      axios
        .get(
          rootServiceUrl +
            `forecast?q=${locationName}&appid=${apiKey}&units=metric`
        )
        .then(({ data }: { data: IForecastResponse }) => {
          resolve(data);
        })
        .catch(error => reject(error));
    });
  };

  private static getForecastByCoords = (
    latitude: number,
    longitude: number,
    units: UnitsList
  ): Promise<IForecastResponse> => {
    return new Promise<IForecastResponse>((resolve, reject) => {
      axios
        .get(
          rootServiceUrl +
            `forecast?lon=${longitude}&lat=${latitude}&appid=${apiKey}&units=${units}`
        )
        .then(({ data }: { data: IForecastResponse }) => {
          resolve(data);
        })
        .catch(error => reject(error));
    });
  };
}

export default WeatherService;
