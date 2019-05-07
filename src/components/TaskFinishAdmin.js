import React, { Component } from 'react';
import {connect} from 'react-redux';
import { actChangeNotify} from './../actions/index';
import { taskCompletedRef } from './../firebase';
import TaskFinishAdminItem from './TaskFinishAdminItem';
import * as notify from './../constants/Notify';


class TaskFinishAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentWillMount() {
        taskCompletedRef.on('value', items => {
            let data = [];
            items.forEach(item => {
                const {email, name } = item.val();
                data.push({email, name, key: item.key})
            })

            //console.log(data);
            this.setState({items: data});
        })
    }

    handleClearAll = () => {
        taskCompletedRef.set([]);
        this.props.changeNotify(notify.NOTI_TYPE_WARNING , notify.NOTI_CLEARALL_TASK_TITLE, notify.NOTI_CLEARALL_TASK_MESSAGE);
    }

    render() {
        let {items} = this.state;

        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Task Finish</h3>
                </div>
                <div className="panel-body">
                    {this.showElementBody(items)}
                </div>
                <div className="panel-footer text-right">
                    <button type="button" className="btn btn-danger"onClick={ () =>this.handleClearAll()}>ClearAll</button>
                </div>
            </div>
        );
    }

    showElementBody(items) {
        let xhtml = null;
        if(items.length > 0 ) {
            xhtml = items.map((item, index) => {
                return (
                    <TaskFinishAdminItem key={index} item={item} index={index}/>
                )   
            });
            return <ul className="list-group">{xhtml}</ul>
        }else {
            return <h4>Loading</h4>
        }   
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeNotify: (style, title, content) => {
            dispatch(actChangeNotify(style, title, content));
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskFinishAdmin);