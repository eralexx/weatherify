import React, { Component } from "react";
import Context from "./Context";
import IGlobalState from "./IGlobalState";
import IWeatherResponse from "../entities/IWeatherReponse";
import WeatherService from "../services/weatherService";
import LocationService from "../services/locationService";
import ICoordinates from "../entities/ICoordinates";

class ContextProvider extends Component<any, IGlobalState> {
  constructor(props: any) {
    super(props);

    this.state = { Loaded: false } as IGlobalState;

    LocationService.getBrowserLocation().then((location: ICoordinates) => {
      if (location?.available) {
        WeatherService.getWeatherByCoords(
          location?.latitude,
          location.longitude
        ).then((data: IWeatherResponse) => {
          this.setState({ Forecast: data, Loaded: true });
        });
      }
    });
  }

  render() {
    return (
      <Context.Provider value={this.state as IGlobalState}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
