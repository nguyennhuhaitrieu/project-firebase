import React, { Component } from 'react';
import {connect} from 'react-redux';
import FormSignUp from '../components/FormSignUp';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {

    render() {
        let {user} = this.props;
        if(user.isLogin === true) {
            return <Redirect to = '/user' />
        }

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

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(SignUp);