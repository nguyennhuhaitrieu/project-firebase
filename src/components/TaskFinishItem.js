import React, { Component } from 'react';

class TaskFinishItem extends Component {
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <p className="task">CSS is too bad</p><span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;admin@gmail.com</span>
                </li>
                <li className="list-group-item">
                    <p className="task">CSS error</p><span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;lthlan54@gmail.com</span>
                </li>
            </ul>
        );
    }
}

export default TaskFinishItem;