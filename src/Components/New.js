import React from "react";
import NewsDate from "../data/date.json";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";

export default function Post(props) {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>{NewsDate.news[props.id].title}</h1>
        <p>{NewsDate.news[props.id].content}</p>
        <p>{NewsDate.news[props.id].date}</p>
      </Container>
    </Jumbotron>
  );
}
