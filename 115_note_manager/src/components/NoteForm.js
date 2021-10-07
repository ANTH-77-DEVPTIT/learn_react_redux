import React, { Component } from 'react';
import { connect } from 'react-redux'
class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: ''
        }
    }
    
    componentWillMount() {
        //đầu tiên phải load được dữ liệu cần sửa vào trong form,
        if(this.props.editData) {
            this.setState({
                noteTitle: this.props.editData.noteTitle,
                noteContent: this.props.editData.noteContent,
                id: this.props.editData.id
            });
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

        //sửa thành công
        if(this.state.id) {
            var editObj = {}
            editObj.id = this.state.id
            editObj.noteTitle = this.state.noteTitle
            editObj.noteContent = this.state.noteContent
            this.props.editDataStore(editObj)
            //sau khi sửa xong thì tắt form đi
            this.props.changeEditStatus()
            this.props.alertOn("Sửa thông tin thành công!!  ", "success", "ghi chú " + editObj.noteTitle)
        }
        else {
            //thêm mới
            var item = {}
            item.noteTitle = noteTitle
            item.noteContent = noteContent
            // this.props.getData(item)
            this.props.addDataStore(item)  //sử dụng reducer trong store, dispatch ADD_DATA
            this.props.alertOn("Thêm mới thông tin thành công!!  ", "info", "ghi chú " + item.noteTitle)
        }
    }

    //tùy biến nội dung tiêu đề của form
    printTitle = () => {
        // console.log(this.props.changeTitle);
        if(this.props.changeTitle) {
            return <h3>NHẬP NỘI DUNG NOTE</h3>
        }
        else {
            return <h3>SỬA NỘI DUNG NOTE</h3>
        }
    }
    
    render() {
        // console.log(this.props.editData);
        return (
            <div className="col-4">
                {this.printTitle()}
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">NHẬP TIÊU ĐỀ NOTE</label>
                        <input defaultValue={this.props.editData.noteTitle} type="text" onChange={(event) => this.isChange(event)} name="noteTitle" id="noteTitle" className="form-control" placeholder="nhập tiêu đề" aria-describedby="helpIdNoteTitle" />
                        <small id="helpIdNoteTitle" className="text-muted">Nhập tiêu đề ở đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">NHẬP NỘI DUNG NOTE</label>
                        <textarea defaultValue={this.props.editData.noteContent} type="text" onChange={(event) => this.isChange(event)} name="noteContent" id="noteContent" className="form-control" placeholder="nhập nội dung" aria-describedby="helpIdNoteContent" />
                        <small id="helpIdNoteContent" className="text-muted">Nhập nội dung ở đây</small>
                    </div>
                    <button type="reset" className="btn btn-primary btn-block" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} style={{width: '100%'}}>Lưu</button>
                </form>
            </div>

        );
    }
}
//sử dụng mapStateToProps. this.props...
const mapStateToProps = (state, ownProps) => {
    return {
        editData: state.editData,
        changeTitle: state.isAdd,
    }
}
//this.props.testThoi

//sử dụng hàm mapDispatchToProps. this.props...
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type: 'ADD_DATA', getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type: 'EDIT__DATA', getItem})
        },
        changeEditStatus: () => {
            dispatch({type: 'CHANGE_EDIT_STATUS'})
        },
        alertOn: (alertContent, alertType, alertHeadline) => {
            dispatch({
                    type: 'ALERT_ON',
                    alertContent,
                    alertType,
                    alertHeadline
                })
        },
        alertOff: () => {
            dispatch({type: 'ALERT_OFF'})
        }
    }
}
//this.props.addDataStore()
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
