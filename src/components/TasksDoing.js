import React, { Component } from 'react';
import TaskDoingItem from './TaskDoingItem';
import FormAddTask from './FormAddTask';
import { taskRef } from './../firebase';

class TasksDoing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentWillMount() {
        taskRef.on('value', items => {
            let data = [];
            items.forEach(item => {
                const {email, name } = item.val();
                data.push({email, name, key: item.key})
            })

            //console.log(data);
            this.setState({items: data});
        })
    }

    render() {
        let {items} = this.state;
        //console.log(items);
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Task Doing</h3>
                    </div>
                    <div className="panel-body">
                        {this.showElementBody(items)}
                    </div>
                    <div className="panel-footer text-right">
                       <FormAddTask />
                    </div>
                </div>
            </div>
        );
    }

    showElementBody(items) {
        let xhtml = null;
        if(items.length > 0 ) {
            xhtml = items.map((item, index) => {
                return (
                    <TaskDoingItem key={index} item={item} index={index}/>
                )
            });
        }
        return <ul className="list-group">{xhtml}</ul>

    }
}

export default TasksDoing;