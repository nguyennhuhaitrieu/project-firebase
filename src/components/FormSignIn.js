import React, { Component } from 'react';
import {connect} from 'react-redux';
import { firebaseApp } from './../firebase';
import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';

class FormSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
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
    let {email, password } = this.state;
    firebaseApp.auth()
      .signInWithEmailAndPassword(email, password)
      .then(data =>{
        this.props.changeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_SIGNIN_SUCCESSFULL_TITLE, notify.NOTI_SIGNIN_SUCCESSFULL_MESSAGE)
      })
      .catch( (error) => {
        this.props.changeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_SIGNIN_FAIL_TITLE, error.message)
      });
    
    event.preventDefault();
  }

  render() {
    return (
      <form className="form-horizontal" onSubmit = {this.handleSubmit}>
        <div className="form-group">
            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-6">
            <input 
              type="text" 
              name="email" 
              className="form-control" 
              d="inputEmail3" 
              placeholder="Email" 
              onChange={this.handChange}
              /> 
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-6">
            <input 
              type="text" 
              name="password" 
              className="form-control" 
              id="inputPassword3" 
              placeholder="Password"
              onChange={this.handChange}
              />
            </div>
        </div>
        <div className="form-group">
            <div className="col-sm-offset-2 col-sm-6">
            <button type="submit" className="btn btn-success">Sign up</button>
            </div>
        </div>
      </form>
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

export default connect(null, mapDispatchToProps)(FormSignIn);