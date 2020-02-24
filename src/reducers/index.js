import {combineReducers} from "redux";
import authedUser from "./AuthedUser";
import Questions from "./Questions";
import Users from "./Users";
export default combineReducers({authedUser,Questions,Users})