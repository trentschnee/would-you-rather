import thunk from 'redux-thunk';
import logger from "./Logger"
import {applyMidleware, applyMiddleware} from "redux";
export default applyMiddleware(thunk,logger)