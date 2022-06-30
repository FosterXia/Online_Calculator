import React, { Component } from 'react';
import NavBar from './navBar';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import Home from './home';
import Calculator from './calculator';
import SignIn from './signIn';
import CreateAccount from './createAccount';
import NotFound from './notFound';
import $ from 'jquery';

class App extends Component {
    state = { 
        is_login: false,
        username: '',
     } 

    componentDidMount = () => {
        $.ajax({
            url: 'https://app1873.acapp.acwing.com.cn/calculator/get_status/',
            type: 'get',
            success: resp => {
                if (resp.result === 'login') {
                    this.setState({
                        is_login: true,
                        username: resp.username,
                    });
                }
                else {
                    this.setState({
                        is_login: false,
                    });
                }
            }
        });
    }

    render() { 
        return (
            <React.Fragment>
                <NavBar is_login={this.state.is_login} username={this.state.username}/>
                <div className='container'>
                    <Routes>
                        <Route path='/calculator' element={<Home />}/>
                        <Route path='/calculator/calculator' element={this.state.is_login ? <Calculator /> : <Navigate replace to='/calculator/login'/>}/>
                        <Route path='/calculator/login' element={this.state.is_login ? <Navigate replace to='/calculator'/> : <SignIn />}/>
                        <Route path='/calculator/register' element={this.state.is_login ? <Navigate replace to='/calculator'/> : <CreateAccount />}/>
                        <Route path='/calculator/404' element={<NotFound />}/>
                        <Route path='/calculator/*' element={<Navigate replace to='/calculator/404'/>}/>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;