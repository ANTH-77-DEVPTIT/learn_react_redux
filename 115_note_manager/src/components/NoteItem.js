import React, { Component } from 'react';
import { connect } from 'react-redux'

class NoteItem extends Component {
    towAction = (getData) => {
        //khi click vào nút sửa thực hiện hai chức năng đó là thay đổi trang thái của form và 
        // lấy được thông tin của thằng ta click vào
        this.props.changeEditStatus()

        ///////hàm lấy nội dung truyền vào trong store
        this.props.getEditData(this.props.node)
    }

    
   
    //hàm xóa dữ liệu
    deleteData = () => {
        // console.log(this.props.node.id)
        this.props.getDeleteData(this.props.node.id)
        this.props.alertOn("Đã được xóa thành công ra khỏi danh sách!! " ,
                             "danger",
                             "ghi chú " +  this.props.node.noteTitle)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id={this.props.index}>
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#note__list" href={"#number" + this.props.index} aria-expanded="true" aria-controls="section1ContentId">
                            {this.props.noteTitle}
                        </a>
                        <div class="btn-group float-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary" onClick={() => this.towAction()}>Sửa</button>
                            <button type="button" className="btn btn-danger" onClick={() => this.deleteData()}>Xóa</button>
                           
                        </div>
                    </h5>
                </div>
                <div id={"number" + this.props.index} className="collapse in" role="tabpanel" aria-labelledby={this.props.index}>
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: 'CHANGE_EDIT_STATUS',
            })
        },
        getEditData: (editObj) => {
            dispatch({
                type: 'GET_EDIT_DATA',
                editObj
            })
        },
        getDeleteData: (deleteId) => {
            dispatch({
                type: 'DELETE_DATA',
                deleteId
            })
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
