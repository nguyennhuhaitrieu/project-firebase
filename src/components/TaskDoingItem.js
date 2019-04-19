import React, { Component } from 'react';
import { taskCompletedRef, taskRef } from './../firebase';

class TaskDoingItem extends Component {

    handleCompleted = (item) => {
        console.log(item);
        taskRef.child(item.key).remove();
        taskCompletedRef.push(item);
    }

    render() {
        let item = {name: '', email: ''};
        item = (this.props.item !== undefined) ? this.props.item : item;

        return (
            <li className="list-group-item">
                <p className="task">{item.name}</p>
                <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{item.email}</span>
                <button onClick={ () =>this.handleCompleted(item)}   type="button" className="btn btn-warning btn-xs">Completed</button>
            </li>
        );
    }
}

export default TaskDoingItem;