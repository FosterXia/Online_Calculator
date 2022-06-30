import React, { Component } from 'react';
import ACTIONS from '../../redux/action';
import { connect } from 'react-redux';

class OperationButton extends Component {
    state = {  } 

    handleClick = (operation) => {
        this.props.choose_operation(operation);
    }

    render() { 
        return (
            <button onClick={() => this.handleClick(this.props.operation)}>{this.props.operation}</button>
        );
    }
}

const mapDispatchToProps = {
    choose_operation : (operation) => {
        return {
            type : ACTIONS.CHOOSE_OPERATION,
            operation : operation
        };
    }
};
 
export default connect(null, mapDispatchToProps)(OperationButton);