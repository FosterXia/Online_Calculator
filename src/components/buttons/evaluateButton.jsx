import React, { Component } from 'react';
import ACTIONS from '../../redux/action';
import { connect } from 'react-redux';

class EvaluateButton extends Component {
    state = {  } 

    handleClick = () => {
        this.props.evaluate();
    }

    render() { 
        return (
            <button className='button-equal' onClick={this.handleClick}>{this.props.operation}</button>
        );
    }
}

const mapDispatchToProps = {
    evaluate : () => {
        return {
            type : ACTIONS.EVALUATE,
        };
    }
};
 
export default connect(null, mapDispatchToProps)(EvaluateButton);