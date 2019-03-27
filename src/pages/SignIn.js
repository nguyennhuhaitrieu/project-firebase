import React, { Component } from 'react';
import FormSignIn from '../components/FormSignIn';

class SignIn extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Sign Up</h3>
                </div>
                <div className="panel-body">
                    <FormSignIn />
                </div>
            </div>
        );
    }
}

export default SignIn;