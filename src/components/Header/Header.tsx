import * as React from "react";
import { Row, Col } from "react-bootstrap";
import SearchBar from "../SearchBar";

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
            <span>Or browse another place's forecast...</span>
          </Col>
          <Col sm={4}>
            <SearchBar />
          </Col>
        </Row>
      </>
    );
  }
}

export default Header;
