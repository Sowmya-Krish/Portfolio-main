import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAmazonaws,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws /><h5>Amazonaws</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>Visualstudiocode</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h5>Netlify</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel/>
        <h5>Vercel</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;