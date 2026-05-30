import React, { Component } from 'react';
import { saveCookie } from '../cookieStore'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            password: ''
        };
        this.handleNumberChange=this.handleNumberChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleNumberChange(event) {
        this.setState({ number: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.number === '' && this.state.password === '') {
            alert('Please input the field');
        }
        else if (!this.state.number.match(/^[0-9]+$/)) {
            alert('Please input number only');
        }
        else if (this.state.number.length !== 12) {
            alert('The phone number should be 12 digits');
        }
        else if (!this.state.number.startsWith('0878')) {
            alert('Your number should start with 0878');
        }
        else if (this.state.password.length < 5 || this.state.password.length > 25) {
            alert('Password length should be 5-25');
        }
        else {
            saveCookie('number', this.state.number, { path: '/' });
            window.location.reload();
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="mysl.png" alt="mysl.png" />
                </div>
                <br />
                <div className="kotak_login" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                    <p className="tulisan_login">Login</p>
                    <form name="loginform" id="frm" method="POST">
                        <label>SL Number</label>
                        <input type="tel" className="form_login" placeholder="SL Number" value={this.state.number} onChange={this.handleNumberChange} />
                        <label>Password</label>
                        <input type="password" className="form_login" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                        <input type="button" id="login" className="tombol_login" defaultValue="LOGIN" onClick={this.handleSubmit} />
                    </form>
                </div>
                <footer>
                    <div className="footer">
                        <p>Copyright © 2019 SL Asiata. All Rights Reserved. </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Login;
