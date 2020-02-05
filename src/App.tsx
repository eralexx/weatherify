import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Weatherify.</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Get your forecast instantly wherever you are</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <h3>Or browse other place's forecast...</h3>
        </Col>
        <Col sm={4}>SearchBar</Col>
      </Row>
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
    </Container>
  );
};

export default App;
