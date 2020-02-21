import React, { Component } from "react";
import Context from "./Context";
import IGlobalState from "./IGlobalState";
import IWeatherResponse from "../entities/IWeatherReponse";
import WeatherService from "../services/weatherService";
import LocationService from "../services/locationService";
import ICoordinates from "../entities/ICoordinates";
import UnitsList from "../entities/Units";

class ContextProvider extends Component<any, IGlobalState> {
  constructor(props: any) {
    super(props);

    this.state = {
      Loaded: false,
      Units: UnitsList.Metric,
      ToggleUnits: this.ToggleUnits
    } as IGlobalState;

    LocationService.getBrowserLocation().then((location: ICoordinates) => {
      if (location?.available) {
        WeatherService.getWeatherDataByCoords(
          location?.latitude,
          location.longitude,
          this.state.Units
        ).then((data: IWeatherResponse) => {
          this.setState({ Forecast: data, Loaded: true });
        });
      }
    });
  }

  ToggleUnits = () => {
    LocationService.getBrowserLocation().then((location: ICoordinates) => {
      if (location?.available) {
        WeatherService.getWeatherDataByCoords(
          location?.latitude,
          location.longitude,
          this.state.Units
        ).then((data: IWeatherResponse) => {
          this.setState({
            Forecast: data,
            Loaded: true,
            Units:
              this.state.Units === UnitsList.Metric
                ? UnitsList.Imperial
                : UnitsList.Metric
          });
        });
      }
    });
  };
  render() {
    return (
      <Context.Provider value={this.state as IGlobalState}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
