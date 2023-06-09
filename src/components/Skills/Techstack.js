import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><h5>
        Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /><h5>
        HTML5</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /><h5>
        CSS3</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><h5>
        ReactJS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><h5>
        NodeJS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h5>
        MongoDb</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h5>
        ExpressJS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h5>
        Mysql</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><h5>
        Git</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
