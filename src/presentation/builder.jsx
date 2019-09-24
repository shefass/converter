import React from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Builder = ({
  inputHash,
  amount,
  numericId,
  message,
  hendleInputAmount,
  hendleInputHash,
  hendleInputMessage,
  hendleInputNumericId,
  hendleConvertToMessage,
  hendleGetData
}) => {
  return (
    <Container className="m-2">
      <InputGroup className="mb-2">
        <FormControl
          placeholder="Method hash"
          aria-label="Method hash"
          aria-describedby="basic-addon2"
          value={inputHash}
          onChange={value => hendleInputHash(value)}
        />
        <FormControl
          placeholder="Amount, Burst"
          aria-label="Amount"
          aria-describedby="basic-addon2"
          value={amount}
          onChange={value => hendleInputAmount(value)}
        />
        <FormControl
          placeholder="Recipiant, numeric id"
          aria-label="Recipiant"
          aria-describedby="basic-addon2"
          value={numericId}
          onChange={value => hendleInputNumericId(value)}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={() => hendleConvertToMessage()}
          >
            Convert to message
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <InputGroup>
        <FormControl
          placeholder="Message to send"
          aria-label="Message"
          aria-describedby="basic-addon2"
          value={message}
          onChange={value => hendleInputMessage(value)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={() => hendleGetData()}>
            Get data from message
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
};

export default Builder;
