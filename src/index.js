import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from "redux"
import MiddleWare from "./middleware";
import Reducers from "./reducers";
import App from "./components/App"
import {Provider} from 'react-redux';
const store=createStore(Reducers,MiddleWare)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))
