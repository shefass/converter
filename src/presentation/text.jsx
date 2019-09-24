import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Text = () => {
  return (
    <Container>
      <h1>MultiSig smart contract</h1>
      <a href="https://github.com/burst-apps-team/blocktalk/blob/master/src/main/java/bt/sample/MultiSigLock.java" target="_blank" rel="noopener noreferrer"  >Source code</a> 
      <h3>To test it you will need:</h3>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item><a href="https://github.com/burst-apps-team/blocktalk" target="_blank" rel="noopener noreferrer">BlockTalk</a> compiler from Java to Byte code</ListGroup.Item>
          <ListGroup.Item>Watch <a href="https://www.youtube.com/channel/UCbkllQJvgwetpBXp-atsNUg" target="_blank" rel="noopener noreferrer">videos</a> (4 parts about BlockTalk) how to use BlockTalk</ListGroup.Item>
          <ListGroup.Item>TestNet coins. You can ask them on any Burst communication channel.</ListGroup.Item>
          <ListGroup.Item>Smart contract accept three inputs send by message to it with mesageIsText set to false.</ListGroup.Item>
          <ListGroup.Item>Enter hash, numeric id of recipiant and amount and press "convert to message". This message you can send to the smart contract.</ListGroup.Item>
          <ListGroup.Item>Hash you will get then you compile smart contract in the console. It is colled "sign hash".</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default Text;
