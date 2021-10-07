import './App.css';
import React, { Component } from 'react';
// import { firebaseConnect } from './firebaseConnect';
import Nav from './components/Nav';
import NodeList from './components/NoteList'
import NoteForm from './components/NoteForm';
import { connect } from 'react-redux';
import AlertInfo from './components/AlertInfo';
class App extends Component {
    showForm = () => {
        if(this.props.isEdit) {
            return (<NoteForm/>)
        }
    }
    render() {
        return (
            <div>
                <Nav/>
                <AlertInfo/>
                <div className="container">
                    <div className="row">
                        <NodeList/>
                        {this.showForm()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)