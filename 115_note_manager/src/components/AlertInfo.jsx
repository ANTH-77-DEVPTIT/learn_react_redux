import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from "react-redux"
class AlertInfo extends Component {
    handleOnDismiss = () => {
        this.props.alertOff()
    }
    render() {
        if(this.props.AlertShow === false)
            return null;
            return (
                <div>
                    <AlertContainer position="top-right">
                        <Alert  type={this.props.AlertType} headline={this.props.AlertHeadline} timeout={5500} onDismiss={()=> this.handleOnDismiss()} >
                            {this.props.AlertContent}
                        </Alert>
                    </AlertContainer>
                </div>
            );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        AlertShow: state.AlertShow,
        AlertContent: state.AlertContent,
        AlertType: state.AlertType,
        AlertHeadline: state.AlertHeadline
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({type: 'ALERT_OFF'})
        },
        alertOn: () => {
            dispatch(
                {type: 'ALERT_ON'},
            )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)