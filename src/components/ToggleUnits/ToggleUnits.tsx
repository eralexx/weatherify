import * as React from "react";

import Switch from "@material-ui/core/Switch";
import IGlobalState from "../../globalState/IGlobalState";
import Context from "../../globalState/Context";
import { Row, Col } from "react-bootstrap";
import UnitsList from "../../entities/Units";

const ToggleUnits = () => {
  const {
    Loaded,
    Forecast,
    Units,
    ToggleUnits
  }: IGlobalState = React.useContext(Context);
  return (
    <Row>
      <Col>Off</Col>
      <Col>
        <Switch
          checked={Units === UnitsList.Metric}
          onChange={ToggleUnits}
          value="checkedC"
        />
      </Col>
      <Col>On</Col>
    </Row>
  );
};

export default ToggleUnits;
