import * as React from "react";
import { Row, Col, Spinner, Carousel } from "react-bootstrap";
import IGlobalState from "../../globalState/IGlobalState";
import Context from "../../globalState/Context";
import IWeatherResponse from "../../entities/IWeatherReponse";
import { List } from "../../entities/IForecastResponse";
import { useContext } from "react";
import DayPrediction from "../DayPrediction";
import TodayWeather from "../TodayWeather";

const Body = () => {
  const { Loaded, CurrentWeather, Forecast }: IGlobalState = useContext(
    Context
  );

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
          </Row>
          <Row>
            <Col sm>
              <Carousel>
                {Forecast.map((day: List, idx) => {
                  return <DayPrediction data={day} key={idx} />;
                })}
              </Carousel>
            </Col>
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
