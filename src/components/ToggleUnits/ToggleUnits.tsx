import * as React from "react";

import Switch from "@material-ui/core/Switch";
import IGlobalState from "../../globalState/IGlobalState";
import Context from "../../globalState/Context";
import { Row, Col, Container } from "react-bootstrap";
import UnitsList from "../../entities/Units";

const ToggleUnits = () => {
  const { Units, ToggleUnits }: IGlobalState = React.useContext(Context);
  return (
    <Container>
      <Row>
        <Col sm={3}>Imperial</Col>
        <Col sm={3}>
          <Switch
            checked={Units === UnitsList.Metric ? true : false}
            onChange={ToggleUnits}
            value={Units}
          />
        </Col>
        <Col sm={3}>Metric</Col>
      </Row>
    </Container>
  );
};

export default ToggleUnits;
