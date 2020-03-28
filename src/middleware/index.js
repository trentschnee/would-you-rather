import thunk from 'redux-thunk';
import logger from "./Logger"
import { applyMiddleware} from "redux";
export default applyMiddleware(thunk,logger)