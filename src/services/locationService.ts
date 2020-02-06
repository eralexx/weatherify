import ICoordinates from "../entities/ICoordinates";

export default class LocationService {
  public static getBrowserLocation = (): Promise<ICoordinates> => {
    return new Promise<ICoordinates>((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          resolve({ latitude, longitude, available: true });
        });
      } else reject({ available: false, latitude: 0, longitude: 0 });
    });
  };
}
