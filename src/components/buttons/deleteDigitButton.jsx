import React, { Component } from 'react';
import ACTIONS from '../../redux/action';
import { connect } from 'react-redux';

class DeleteDigitButton extends Component {
    state = {  } 

    handleClick = () => {
        this.props.delete_digit();
    }

    render() { 
        return (
            <button onClick={this.handleClick}>{this.props.operation}</button>
        );
    }
}

const mapDispatchToProps = {
    delete_digit : () => {
        return {
            type : ACTIONS.DELETE_DIGIT,
        };
    }
};
 
export default connect(null, mapDispatchToProps)(DeleteDigitButton);