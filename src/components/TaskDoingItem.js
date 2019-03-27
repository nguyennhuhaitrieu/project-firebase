import React, { Component } from 'react';

class TaskDoingItem extends Component {
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <p className="task">Login fail with email</p><span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;admin@gmail.com</span>
                    <button type="button" className="btn btn-warning btn-xs">Completed</button>
                </li>
                <li className="list-group-item">
                    <p className="task">Error register</p><span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;admin@gmail.com</span>
                    <button type="button" className="btn btn-warning btn-xs">Completed</button>
                </li>
            </ul>
        );
    }
}

export default TaskDoingItem;