import React, { Component } from 'react';
import { taskRef } from './../firebase';

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
        //console.log(task);
        taskRef.push({
            name: task,
            email: 'nguyennhuhaitrieu@gmail.com'
        })

        this.setState({ task: ''});
        event.preventDefault();
    }

    render() {
        return (
            <form className="form-inline" onSubmit = {this.handleSubmit} >
                <div className="form-group">
                    <input 
                        type="text" 
                        name="task" 
                        className="form-control" 
                        onChange={this.handChange}
                        placeholder="Task" />
                </div>
                <button type="submit" className="btn btn-info">Add</button>
            </form>
        );
    }
}

export default FormAddTask;