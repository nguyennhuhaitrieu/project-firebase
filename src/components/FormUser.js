import React, { Component } from 'react';

class FormUser extends Component {
    render() {
        let user = this.props.user.info;
        console.log(user);
        return (
            <div className="user-inner">
                <h4>Email: {user.email}</h4>
                <h4>UserID: {user.uid}</h4>
                <h4>Website: nguyennhuhaitrieu.com</h4>
                <button type="submit" className="btn btn-success">Logout</button>
            </div>
        );
    }
}

export default FormUser;