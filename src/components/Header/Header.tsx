import * as React from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";

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
          <Col sm={4}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">
                  @example.com
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default Header;
