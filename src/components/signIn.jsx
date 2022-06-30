import React, { Component } from 'react';
import Card from './card';
import $ from 'jquery';

class SignIn extends Component {
    state = { 
        error_message: '',
        username: '',
        password: '',
     } 

    handleClick = (e) => {
        e.preventDefault();
        
        if (this.state.username === '') {
            this.setState({error_message: 'username cannot be null'});
        }
        else if (this.state.password === '') {
            this.setState({error_message: 'password cannot be null'});
        }
        else {
            $.ajax({
                url: 'https://app1873.acapp.acwing.com.cn/calculator/login/',
                type: 'get',
                data: {
                    username: this.state.username,
                    password: this.state.password,
                },
                dataType: 'json',
                success: resp => {
                    if (resp.result === 'success') {
                        window.location.href='/calculator';
                    }
                    else {
                        this.setState({error_message: resp.result});
                    }
                }
            });
        }
    }

    render() { 
        return (
            <React.Fragment>
                <Card>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-sm-3">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input onChange={e => {this.setState({username : e.target.value})}} placeholder='default: 123' type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input onChange={e => {this.setState({password : e.target.value})}} placeholder='default: 123' type="password" className="form-control" id="password" />
                                    </div>
                                    <button onClick={this.handleClick} style={{width: '100%'}} type="submit" className="btn btn-primary">Sign in</button>
                                    <div style={{height: '2rem', fontSize: '12px', color: 'red'}}>
                                        {this.state.error_message}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </Card>
            </React.Fragment>
        );
    }
}
 
export default SignIn;