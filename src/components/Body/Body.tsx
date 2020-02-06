import * as React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import IGlobalState from "../../globalState/IGlobalState";
import Context from "../../globalState/Context";
import { Weather } from "../../entities/IWeatherReponse";

const Body = () => {
  const { Loaded, Forecast }: IGlobalState = React.useContext(Context);

  return (
    <>
      {Loaded ? (
        <>
          <Row>
            <Col sm={8}>{Forecast.base}</Col>
            <Col sm={4}>{Forecast.name}</Col>
          </Row>
          <Row>
            {Forecast.weather.map((day: Weather) => {
              return (
                <Col sm>
                  {day.main} {day.id} {day.icon} {day.description}{" "}
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
      );
    </>
  );
};

export default Body;
