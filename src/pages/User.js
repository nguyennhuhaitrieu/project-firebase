import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">User</h3>
                </div>
                <div className="panel-body">
                    <div className="user-inner">
                        <h4>Email: nguyennhuhaitrieu@gmail.com</h4>
                        <h4>UserID: W740UjZcnlSMgiwfBuYV4aMU9i43</h4>
                        <h4>Website: nguyennhuhaitrieu.com</h4>
                        <button type="submit" className="btn btn-success">Logout</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;