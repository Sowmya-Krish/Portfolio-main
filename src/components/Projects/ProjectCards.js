import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import {
  AiFillGithub
} from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "live"}
        </Button>
        <Button variant="primary" href={props.client} style={{marginLeft: "5px"}} target="_blank">
          <AiFillGithub /> &nbsp;
          {props.isBlog ? "View Blog" : "client"}
        </Button>
        <Button variant="primary" href={props.server} style={{marginLeft: "5px"}} target="_blank">
          <AiFillGithub /> &nbsp;
          {props.isBlog ? "View Blog" : "server"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;