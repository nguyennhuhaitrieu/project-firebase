import React, { Component } from 'react';
import {connect} from 'react-redux';
import TasksDoing from './../components/TasksDoing';
import TasksFinish from './../components/TasksFinish';
import TaskFinishAdmin from './../components/TaskFinishAdmin';
class Tasks extends Component {
    render() {
        let {user} = this.props;
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <TasksDoing user= {user} />
                </div>
                
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    {this.showTaskFnishList(user)}
                </div>
               
            </div>
        );
    }

    showTaskFnishList(user) {
        if(user.info.isAdmin === true) {
            return <TaskFinishAdmin user={user}/>
        }else {
            return  <TasksFinish user={user} />
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Tasks);