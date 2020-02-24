import React from 'react';
import {handleInitialData} from "../actions/Shared"
import {connect} from "react-redux"
class App extends React.Component{
componentDidMount(){
this.props.dispatch(handleInitialData())
}
render(){
    return(  <div className="container">test</div>)
}
}

export default connect()(App);