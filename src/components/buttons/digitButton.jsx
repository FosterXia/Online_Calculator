import React, { Component } from 'react';
import ACTIONS from '../../redux/action';
import { connect } from 'react-redux';

class DigitButton extends Component {
    state = {  } 

    handleClick = (digit) => {
        this.props.add_digit(digit);
    }

    render() { 
        return (
            <button onClick={() => this.handleClick(this.props.digit)}>{this.props.digit}</button>
        );
    }
}

const mapDispatchToProps = {
    add_digit : (digit) => {
        return {
            type : ACTIONS.ADD_DIGIT,
            value : digit
        };
    }
};
 
export default connect(null, mapDispatchToProps)(DigitButton);