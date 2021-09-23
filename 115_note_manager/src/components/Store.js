import { noteData } from "../firebaseConnect"
var redux = require("redux")
//khởi tạo reducer
const noteInitialState = {
    testConnect: 'testThoi'
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem)
            alert('thêm thành công '+ JSON.stringify(action.getItem) + ' vào trong firebase');
            return state
            
        default:
            return state
        }
    }
//khởi tạo store
var store = redux.createStore(allReducer)
export default store