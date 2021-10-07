import { noteData } from "../firebaseConnect"
var redux = require("redux")
//khởi tạo reducer
const noteInitialState = {
    isEdit: false,
    editData: {},
    isAdd: false,
    AlertShow: false,
    AlertContent: '',
    AlertType: '',
    AlertHeadline: ''
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem)
            return state
        
        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit}

        case "CHANGE_ADD_STATUS":
            return { ...state, isAdd: !state.isAdd}

        case "GET_EDIT_DATA":
            return { ...state, editData: action.editObj}

        case "EDIT__DATA":
            //lấy ra phần tư có id tương ứng rồi update vào thôi
            noteData.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            })
            // alert('dữ liệu ' + JSON.stringify(action.getItem) + " đã được cập nhật vào firebase");
            return { ...state, editData: {}}

        case "DELETE_DATA":
            noteData.child(action.deleteId).remove()
            // alert('đã xóa thành công ghi chú có id là: ' + action.deleteId + "ra khỏi danh sách" );
            return state

        case "ALERT_ON":
            return { ...state, AlertShow: true, AlertContent: action.alertContent, AlertType: action.alertType, AlertHeadline: action.alertHeadline}
        case "ALERT_OFF":
            return { ...state, AlertShow: false}

        default:
            return state
        }
    }
//khởi tạo store
var store = redux.createStore(allReducer)
store.subscribe(function(){
    // console.log(JSON.stringify(store.getState()));
})
export default store