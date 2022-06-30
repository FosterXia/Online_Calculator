import React, { Component } from 'react';
import ACTIONS from '../../redux/action';
import { connect } from 'react-redux';

class ClearButton extends Component {
    state = {  } 

    handleClick = () => {
        this.props.clear();
    }

    render() { 
        return (
            <button onClick={this.handleClick}>{this.props.operation}</button>
        );
    }
}

const mapDispatchToProps = {
    clear : () => {
        return {
            type : ACTIONS.CLEAR,
        };
    }
};
 
export default connect(null, mapDispatchToProps)(ClearButton);