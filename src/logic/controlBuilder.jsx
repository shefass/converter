import React, {Component} from 'react';

import decToHec from "./converterDecToHex";
import hecToDec from "./converterHecToDec";

import Builder from "../presentation/builder";



class ControlBuilder extends Component {
    state = { 
        inputHash: "",
        amount: "",
        numericId: "",
        message: ""
    }

    hendleInputHash = (e) => {
        this.setState({inputHash: e.target.value});
    }
    hendleInputAmount = (e) => {
        this.setState({amount: e.target.value});
    }
    hendleInputNumericId = (e) => {
        this.setState({numericId: e.target.value});
    }
    hendleInputMessage = (e) => {
        this.setState({message: e.target.value});
    }

    hendleConvertToMessage = () => {

       let amount = Number(this.state.amount) * 100000000;
       let convertedAmount = decToHec(String(amount));
       let convertedNumericId = decToHec(this.state.numericId);
       let hash = decToHec(this.state.inputHash);
       this.setState({ message: hash + convertedAmount + convertedNumericId})
       
        
    }
    hendleGetData =()=> {
        let arrayMessage = this.state.message.split('');
        let hashHex = arrayMessage.slice(0, 16).join('');
        let hash = hecToDec(hashHex); 
        this.setState({ inputHash: hash})
        let amauntString = arrayMessage.slice(16, 33).join('');
        let amount = Number(hecToDec(amauntString))/100000000;
        this.setState({amount: String(amount)}) 
        let numericIdHex = arrayMessage.slice(32, 49).join('');
        let numericId = hecToDec(numericIdHex);
        this.setState({numericId: numericId})
        
        //697dc89417ff765900e40b54020000001acf3c5ef2907048
    }

    render() { 
const {inputHash, amount, numericId, message } = this.state;
        return ( 
            
            <Builder 
            inputHash={inputHash}
            amount={amount}
            numericId={numericId}
            message={message}
            hendleInputAmount={this.hendleInputAmount}
            hendleInputHash={this.hendleInputHash}
            hendleInputMessage={this.hendleInputMessage}
            hendleInputNumericId={this.hendleInputNumericId}
            hendleConvertToMessage={this.hendleConvertToMessage}
            hendleGetData={this.hendleGetData}
            />
         );
    }
}
 
export default ControlBuilder;