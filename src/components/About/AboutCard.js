import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple"> </span>
            <span className="purple"></span>
            <br /><b>
            I am a passionate Full Stack Developer👩‍💻 having an experience of
            building web applications with MERN Stack and someother cool
            libraries😎 and frameworks
            <br />
            <br />
            Developing highly interactive Frontend/Userinterfaces for web
            applications🤩
            <br />
            <br />
            Ability to translate business requirements into innovative software
            solutions😎
            </p>

          <p style={{ color: "rgb(155 126 172)" }}></p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
