import React, { Component } from 'react';
import TasksDoing from './../components/TasksDoing';
import TasksFinish from './../components/TasksFinish';

class Tasks extends Component {
    render() {
        return (
            <div className="row">
                <TasksDoing />
                <TasksFinish />
            </div>
        );
    }
}

export default Tasks;