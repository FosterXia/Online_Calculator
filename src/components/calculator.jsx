import React, { Component } from 'react';
import Card from './card';
import { connect } from 'react-redux';
import DigitButton from './buttons/digitButton';
import ClearButton from './buttons/clearButton';
import OperationButton from './buttons/operationButton';
import EvaluateButton from './buttons/evaluateButton';
import DeleteDigitButton from './buttons/deleteDigitButton';

class Calculator extends Component {
    state = { 
        formatter : Intl.NumberFormat('en-us')
     } 

    format = (number) => {
        if (number === '')  return '';
        const [integer, decimal] = number.split('.');
        if (decimal === undefined)
            return this.state.formatter.format(integer);
        return `${this.state.formatter.format(integer)}.${decimal}`;
    }

    render() { 
        return (
            <React.Fragment>
                <Card>
                    <div className="calculator">
                        <div className="output">
                            <div className="previous-output">
                                {this.format(this.props.lastOperand)} {this.props.operation}
                            </div>
                            <div className="current-output">
                                {this.format(this.props.currentOperand)}
                            </div>
                        </div>
                        
                        <ClearButton operation='C'/>
                        <DeleteDigitButton operation='Del'/>
                        <OperationButton operation='x^y'/>
                        <OperationButton operation='÷'/>
                        <DigitButton digit='7'/>
                        <DigitButton digit='8'/>
                        <DigitButton digit='9'/>
                        <OperationButton operation='×'/>
                        <DigitButton digit='4'/>
                        <DigitButton digit='5'/>
                        <DigitButton digit='6'/>
                        <OperationButton operation='-'/>
                        <DigitButton digit='1'/>
                        <DigitButton digit='2'/>
                        <DigitButton digit='3'/>
                        <OperationButton operation='+'/>
                        <DigitButton digit='0'/>
                        <DigitButton digit='.'/>
                        <EvaluateButton operation='='/>
                        



                    </div>
                </Card>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentOperand : state.currentOperand,
        lastOperand : state.lastOperand,
        operation : state.operation
    };
};
 
export default connect(mapStateToProps, null)(Calculator);