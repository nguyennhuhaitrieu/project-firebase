import React, { Component } from 'react';
import FormSignUp from '../components/FormSignUp';

class SignIn extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Sign Up</h3>
                </div>
                <div className="panel-body">
                    <FormSignUp />
                </div>
            </div>
        );
    }
}

export default SignIn;