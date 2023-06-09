import React from "react";
import Card from "react-bootstrap/Card";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  AiOutlineMail
} from "react-icons/ai";

function DemoCredential(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title className="purple">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          <AiOutlineMail />
          {props.mail}
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          <RiLockPasswordLine />
          {props.pass}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default DemoCredential;