import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class NavBar extends Component {
    state = {  } 

    handleClick = () => {
        $.ajax({
            url: 'https://app1873.acapp.acwing.com.cn/calculator/logout/',
            type: 'get',
            success: resp => {
                console.log(resp);
                if (resp.result === 'success') {
                    window.location.href="/calculator";
                }
            }
        });
    }

    render_calculator = () => {
        if (this.props.is_login) {
            return (
                <li className="nav-item ms-3">
                    <Link className="nav-link active" aria-current="page" to="/calculator/calculator">Online calculator</Link>
                </li>               
            );
        }
        else {
            return ;
        }
    }

    render_user = () => {
        if (!this.props.is_login) {
            return (
                <React.Fragment>
                    <li className="nav-item m-2">
                        <Link className="nav-link active" aria-current="page" to="/calculator/login">Sign in</Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link className="nav-link active" aria-current="page" to="/calculator/register">Create account</Link>
                    </li>
                </React.Fragment>
            );
        }
        else {
            return (
                <React.Fragment>
                    <li className="nav-item m-2">
                        <span className="nav-link active" aria-current="page">hello, {this.props.username}</span>
                    </li>
                    <li className="nav-item m-2">
                        <Link onClick={this.handleClick} className="nav-link active" aria-current="page" to="/calculator">Sign out</Link>
                    </li>
                </React.Fragment>
            );
        }
    }

    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/calculator">Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {this.render_calculator()}
                        </ul>
                        <ul className="navbar-nav">
                            {this.render_user()}
                        </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default NavBar;