import React, { Component } from 'react';
import { taskCompletedRef, taskRef } from './../firebase';
import {connect} from 'react-redux';
import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';

class TaskDoingItem extends Component {

    handleCompleted = (item) => {
        console.log(item);
        taskRef.child(item.key).remove();
        taskCompletedRef.push(item);
        this.props.changeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_COMPLETED_TASK_TITLE, notify.NOTI_COMPLETED_TASK_MESSAGE);
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

const mapDispatchToProps = (dispatch) => {
    return {
        changeNotify: (style, title, content) => {
            dispatch(actChangeNotify(style, title, content));
        }
    }
}


export default connect(null, mapDispatchToProps)(TaskDoingItem);