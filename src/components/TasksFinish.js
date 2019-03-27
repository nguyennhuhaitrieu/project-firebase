import React, { Component } from 'react';
import TaskFinishItem from './TaskFinishItem';

class TasksFinish extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">Task Finish</h3>
                    </div>
                    <div className="panel-body">
                        <TaskFinishItem />
                    </div>
                </div>
          </div>
        );
    }
}

export default TasksFinish;