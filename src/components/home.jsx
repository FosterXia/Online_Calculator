import React, { Component } from 'react';
import Card from './card';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Card>
                    <h3>Welcome</h3>
                </Card>
            </React.Fragment>
        );
    }
}
 
export default Home;