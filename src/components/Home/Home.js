import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/about.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Sowmya Krishnan</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <div className="my-cv">
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1bTC478skJbGk014dNAAV-5x94e8audgX/view?usp=sharing"
                    )
                  }
                  className="btn cv-button"
                  type="button"
                >
                  <AiOutlineDownload />
                  &nbsp;RESUME
                </button>
                <a
                  style={{ marginLeft: 5 }}
                  href="https://github.com/KamalRenu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
                <a
                  style={{ marginLeft: 5 }}
                  href="https://www.linkedin.com/in/kamal-renu-78994714a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
