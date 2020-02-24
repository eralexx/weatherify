import * as React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import IGlobalState from "../../globalState/IGlobalState";
import Context from "../../globalState/Context";
import IWeatherResponse, { Weather } from "../../entities/IWeatherReponse";
import { useContext } from "react";
import DayPrediction from "../DayPrediction";
import TodayWeather from "../TodayWeather";

const Body = () => {
  const { Loaded, CurrentWeather }: IGlobalState = useContext(Context);

  return (
    <>
      {Loaded ? (
        <>
          <Row>
            <Col sm={8}>{CurrentWeather.base}</Col>
            <Col sm={4}>{CurrentWeather.name}</Col>
          </Row>
          <Row>
            <Col>
              <TodayWeather
                data={
                  CurrentWeather as Pick<
                    IWeatherResponse,
                    "main" | "name" | "clouds" | "wind" | "name"
                  >
                }
              />
            </Col>
            {CurrentWeather.weather.map((day: Weather) => {
              return (
                <Col sm>
                  <DayPrediction data={day} />
                </Col>
              );
            })}
          </Row>
        </>
      ) : (
        <div className="spinner-container">
          <Spinner className="spinner" animation="grow" variant="info" />
        </div>
      )}
    </>
  );
};

export default Body;
