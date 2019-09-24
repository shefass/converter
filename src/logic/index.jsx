import React from "react";

import Control from "./controlCoverter";
import ControlBuilder from "./controlBuilder";
import Container from "react-bootstrap/Container";

import Card from "react-bootstrap/Card";

const Index = () => {
  return (
    <Container>
      <Card bg="light">
        <Control />
        <ControlBuilder />
      </Card>
      <br />
    </Container>
  );
};

export default Index;
