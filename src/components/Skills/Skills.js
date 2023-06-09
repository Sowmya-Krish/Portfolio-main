import React from 'react';
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
               <Techstack />
        <h3 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h3>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  )
}

export default Skills