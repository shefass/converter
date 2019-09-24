import React, { Component } from "react";

import decToHec from "./converterDecToHex";
import hecToDec from "./converterHecToDec";

import Converter from "../presentation/converter";

class ControlConverter extends Component {
  state = {
    input: ""
  };

  hendleInput = e => {
    this.setState({ input: e.target.value });
  };
  hendleConvertToHex = () => {
    let converted = decToHec(this.state.input);
    this.setState({ input: converted });
  };
  hendleConvertToDec = () => {
    let converted = hecToDec(this.state.input);
    this.setState({ input: converted });
  };

  render() {
    return (
      <Converter
        hendleInput={this.hendleInput}
        input={this.state.input}
        hendleConvertToHex={this.hendleConvertToHex}
        hendleConvertToDec={this.hendleConvertToDec}
      />
    );
  }
}

export default ControlConverter;
