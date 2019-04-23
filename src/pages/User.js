import React, { Component } from 'react';
import {connect} from 'react-redux';

import FormUser from './../components/FormUser'

class User extends Component {
    render() {
        let {user} = this.props;
        //console.log(user);
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">User</h3>
                </div>
                <div className="panel-body">
                    <FormUser user={ user }/>
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

export default connect(mapStateToProps, null)(User);