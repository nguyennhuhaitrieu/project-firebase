import React, { Component } from 'react';
import TaskDoingItem from './TaskDoingItem';

class TasksDoing extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Task Doing</h3>
                    </div>
                    <div className="panel-body">
                        <TaskDoingItem />
                    </div>
                    <div className="panel-footer text-right">
                        <form className="form-inline">
                        <div className="form-group">
                            <input type="text" defaultValue name="task" className="form-control" placeholder="Task" />
                        </div>
                        <button type="submit" className="btn btn-info">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TasksDoing;