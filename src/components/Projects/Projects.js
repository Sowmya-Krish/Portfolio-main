import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import email from "../../Assets/Projects/email.png";
import Flipkart from "../../Assets/Projects/f";
//import gmail from "../../Assets/Projects/gmail.png";
import DemoCredential from "./DemoCredential";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <h1 className="project-heading">
          Demo <strong className="purple">Credentials </strong>
        </h1>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <DemoCredential
              title="User Credential"
              mail="user123@gmail.com"
              pass="user@123"
            />
          </Col>

          <Col md={6} className="project-card">
            <DemoCredential
              title="Admin Credential"
              mail="admin@gmail.com"
              pass="admin@123"
            />
          </Col>
        </Row> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={email}
              isBlog={false}
              title="Email app"
              description="A simple email Application using MERN stack (ReactJS, MongoDB, Express JS, Node JS) with SMTP.JS and yopmail."
              link="https://tranquil-basbousa-492899.netlify.app/"
              client="https://github.com/Sowmya-Krish/Email-app-Frontend"
              server="https://github.com/Sowmya-Krish/Email-app-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={gmail}
              isBlog={false}
              title="Mail Application"
              description="Mail app is the MERN Stack application using nodemailer for send mail."
              link="https://classy-paprenjak-0a2cf3.netlify.app"
              client="https://github.com/KamalRenu/mail-app"
              server="https://github.com/KamalRenu/gmailclone-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog app"
              description="A responsive blog application using the MERN stack (MongoDB, Express Js, React Js, and Node Js)"
              link="https://calm-profiterole-5e6a96.netlify.app"
              client="https://github.com/KamalRenu/blog-app-frontend"
              server="https://github.com/KamalRenu/blog-app-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flipkart}
              isBlog={false}
              title="Ecommerce"
              description="A MERN stack application e-commerce site that is build using React, MUI, 
              NodeJS, ExpressJS, MongoDB, PayTM payment integration"
              link="https://rad-donut-63350c.netlify.app/"
              client="https://github.com/Sowmya-Krish/Flipkart-Front-end"
              server="https://github.com/Sowmya-Krish/Flipkart-Back-end"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
