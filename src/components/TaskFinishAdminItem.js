import React, { Component } from 'react';
import { taskCompletedRef } from './../firebase';

import {connect} from 'react-redux';
import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';

class TaskFinishAdminItem extends Component {

    componentWillMount() {
        taskCompletedRef.on('value', items => {
            let data = [];
            items.forEach(item => {
                const {email, name } = item.val();
                data.push({email, name, key: item.key})
            })

            //console.log(data);
            //this.setState({items: data});
        })
    }

    handleDelete(key) {
        taskCompletedRef.child(key).remove();
        this.props.changeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_REMOVE_TASK_TITLE, notify.NOTI_REMOVE_TASK_MESSAGE);
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

const mapDispatchToProps = (dispatch) => {
    return {
        changeNotify: (style, title, content) => {
            dispatch(actChangeNotify(style, title, content));
        }
    }
}


export default connect(null, mapDispatchToProps)(TaskFinishAdminItem);
