import React, { Component } from 'react';
import { connect } from 'react-redux'
class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    addData = (noteTitle, noteContent) => {
        var item = {}
        item.noteTitle = noteTitle
        item.noteContent = noteContent
        // this.props.getData(item)
        this.props.addDataStore(item)  //sử dụng reducer trong store, dispatch ADD_DATA
    }
    
    render() {
        return (
            <div className="col-4">
                <h3>NỘI DUNG NOTE</h3>
                <form>
                    <div className="form-group">
                    <label htmlFor="noteTitle">NHẬP TIÊU ĐỀ NOTE</label>
                    <input type="text" onChange={(event) => this.isChange(event)} name="noteTitle" id="noteTitle" className="form-control" placeholder="nhập tiêu đề" aria-describedby="helpIdNoteTitle" />
                    <small id="helpIdNoteTitle" className="text-muted">Nhập tiêu đề ở đây</small>
                    </div>
                    <div className="form-group">
                    <label htmlFor="noteContent">NHẬP NỘI DUNG NOTE</label>
                    <textarea type="text" onChange={(event) => this.isChange(event)} name="noteContent" id="noteContent" className="form-control" placeholder="nhập nội dung" aria-describedby="helpIdNoteContent" defaultValue={""} />
                    <small id="helpIdNoteContent" className="text-muted">Nhập nội dung ở đây</small>
                    </div>
                    <button type="reset" className="btn btn-primary btn-block" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} style={{width: '100%'}}>Lưu</button>
                </form>
            </div>

        );
    }
}
//sử dụng mapStateToProps
const mapStateToProps = (state, ownProps) => {
    return {
        testThoi: state.testConnect
    }
}
//this.props.testThoi

//sử dụng hàm mapDispatchToProps
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type: 'ADD_DATA', getItem})
        }
    }
}
//this.props.addDataStore()
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
