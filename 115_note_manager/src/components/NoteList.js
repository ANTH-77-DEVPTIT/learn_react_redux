import React, { Component } from 'react';
import NoteItem from './NoteItem';
import { noteData } from "../firebaseConnect"

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }
    //trước khi render nó đã load dữ liệu ra rồi
    componentWillMount() {
        noteData.on('value', (notes) => {
            var arrayNotes = []
            notes.forEach((note) => {
                const key = note.key
                const noteTitle = note.val().noteTitle
                const noteContent = note.val().noteContent
                arrayNotes.push({
                    id:  key,
                    noteTitle: noteTitle,
                    noteContent: noteContent,
                })
            })  
            this.setState({
                dataFirebase: arrayNotes
            });
        })
    }
    
    
    getData = () => {
        if(this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, key) => {
                return (
                    <NoteItem
                        key={key}
                        index={key}
                        noteContent = {value.noteContent}
                        noteTitle = {value.noteTitle}
                    />
                )
            })
        }
    }

    render() {
        return (
            <div className="col">
                <div id="note__list" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>

        );
    }
}

export default NoteList;