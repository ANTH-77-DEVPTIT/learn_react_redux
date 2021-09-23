import './App.css';
import React, { Component } from 'react';
// import { firebaseConnect } from './firebaseConnect';
import Nav from './components/Nav';
import NodeList from './components/NoteList'
import NoteForm from './components/NoteForm';
class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="container">
                    <div className="row">
                        <NodeList/>
                        <NoteForm/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;