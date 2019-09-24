import React from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


const Converter = ({hendleInput, input, hendleConvertToHex, hendleConvertToDec}) => {
  return (
    <Container className="m-2">
        <p>No error handling and input validation, so just press refresh then coverter breaks </p>
      <InputGroup>
        
        <FormControl
          placeholder="Please input here string to convert"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={input}
          onChange={value => hendleInput(value)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={()=>hendleConvertToHex()}>
            Convert to Hex (littel endian)
          </Button>
          <Button variant="outline-secondary" onClick={()=>hendleConvertToDec()}>Convert to Dec</Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
};

export default Converter;
