import React, { Component } from "react";
import Guest from "./Guest";
import User from "./User";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {

        if (this.state.isLoggedIn) {
            return (
                <User logout={this.handleLogout} />
            );
        }
        else {
            return (
                <Guest login={this.handleLogin} />
            );
        }

    }
}

export default Login;