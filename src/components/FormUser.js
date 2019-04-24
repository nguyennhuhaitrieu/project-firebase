import React, { Component } from 'react';
import { firebaseApp } from './../firebase';

class FormUser extends Component {
    handleLogout = () => {
        firebaseApp.auth().signOut();
    }
    render() {
        let user = this.props.user.info;
        //console.log(user);
        let xhtmlAdmin = (user.isAdmin === true) ? 'Admin' : 'User'
        return (
            <div className="user-inner">
                <h4>Email: {user.email}</h4>
                <h4>UserID: {user.uid}</h4>
                <h4>Website: {user.website}</h4>
                <h4>Role: {xhtmlAdmin}</h4>
                <button type="submit" className="btn btn-success" onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

export default FormUser;