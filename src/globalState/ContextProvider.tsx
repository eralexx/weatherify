import React, { Component } from "react";
import Context from "./Context";
import IGlobalState from "./IGlobalState";
import WeatherService from "../services/weatherService";

class ContextProvider extends Component<any, IGlobalState> {
  constructor(props: any) {
    super(props);

    this.state = { Loaded: false } as IGlobalState;

    WeatherService.getWeatherByCoords(123, 123);
  }
}

export default ContextProvider;
