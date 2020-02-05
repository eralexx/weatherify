import axios from "axios";

const apiKey: string = "b5eef92c5c7ad483322050c8885761ff";

class WeatherService {
  public static getWeatherByCoords = (latitude: number, longitude: number) => {
    throw new Error("Method not implemented.");
  };

  public static getWeatherByCityName = (locationName: string) => {
    throw new Error("Method not implemented.");
  };
}

export default WeatherService;
