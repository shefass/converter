import React from "react";

import Control from "./controlCoverter";
import ControlBuilder from "./controlBuilder";



import Card from "react-bootstrap/Card";

const Index = () => {
  return (
    <Card className="m-2" bg="light">
      <Control />
      <ControlBuilder />
    </Card>
  );
};

export default Index;
