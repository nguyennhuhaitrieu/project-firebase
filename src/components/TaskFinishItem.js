import React, { Component } from 'react';
import { taskCompletedRef } from './../firebase';

class TaskFinishItem extends Component {

    handleDelete(key) {
        console.log(key);
        taskCompletedRef.child(key).remove();
    }

    render() {
        let item = {name: '', email: '' , key: ''};
        item = (this.props.item !== undefined) ? this.props.item : item;

        return (
            <li className="list-group-item">
                <p className="task">{item.name}</p>
                <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{item.email}</span>

                <button onClick={ () =>this.handleDelete(item.key)}   type="button" className="btn btn-danger btn-xs">Delete</button>
            </li>
        );
    }
}

export default TaskFinishItem;