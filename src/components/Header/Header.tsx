import * as React from "react";
import { Row, Col } from "react-bootstrap";

class Header extends React.Component<any, any> {
  public render() {
    return (
      <>
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
          <Col sm={4}></Col>
        </Row>
      </>
    );
  }
}

export default Header;
