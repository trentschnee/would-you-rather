import { combineReducers } from "redux";
import authedUser from "./AuthedUser";
import questions from "./Questions";
import users from "./Users";
export default combineReducers({ authedUser, users, questions });
