import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import {connect} from 'react-redux';
import { actHideNotify} from './../actions/index';

class Notify extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isShow: true,
        }
    }

    handleDismiss = () => {
        //console.log('handleDismiss');
        this.props.hideNotify();
    }

    render() {
        let { style, title, content, isShow } = this.props.item;
        if(isShow === false) return null;

        return (
            <AlertContainer position="top-right">
                <Alert headline={title} type={style} onDismiss={this.handleDismiss} timeout={20000}>
                    {content}
                </Alert>
            </AlertContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.notify
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideNotify: (style, title, content) => {
            dispatch(actHideNotify(style, title, content));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notify);