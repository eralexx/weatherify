import React, { useContext } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Context from "./globalState/Context";
import IGlobalState from "./globalState/IGlobalState";
import Spinner from "react-bootstrap/Spinner";

const App = () => {
  const { Loaded }: IGlobalState = useContext(Context);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Weatherify.</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Get your forecast instantly wherever you are.</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <h3>Or browse other place's forecast...</h3>
        </Col>
        <Col sm={4}>SearchBar</Col>
      </Row>
      {Loaded ? (
        <>
          <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
          </Row>
          <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
        </>
      ) : (
        <Spinner animation="grow" variant="info" />
      )}
    </Container>
  );
};

export default App;
