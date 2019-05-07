import React, { Component } from 'react';
import { taskRef } from './../firebase';
import * as notify from './../constants/Notify';

class FormAddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
    }

    handChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) => {
        let { task } = this.state;
        let {email} = this.props.user.info;
        //console.log(task);
        taskRef.push({
            name: task,
            email: email,
        })

        this.props.changeNotify(notify.NOTI_TYPE_SUCCESS , notify.NOTI_ADD_TASK_TITLE, notify.NOTI_ADD_TASK_MESSGAE);

        this.setState({ task: ''});
        event.preventDefault();
    }

    render() {
        let {task}  = this.state
        return (
            <form className="form-inline" onSubmit = {this.handleSubmit} >
                <div className="form-group">
                    <input 
                        type="text" 
                        name="task" 
                        className="form-control" 
                        onChange={this.handChange}
                        value = {task}
                        placeholder="Task" />
                </div>
                <button type="submit" className="btn btn-info">Add</button>
            </form>
        );
    }
}


export default FormAddTask;