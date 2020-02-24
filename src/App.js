import React from 'react';
import {handleInitialData} from "./actions/Shared"
import {connect} from "react-redux"
class App extends React.Component{
componentDidMount(){
this.props.dispatch(handleInitialData())
}
render(){
    return(<div>test</div>)
}
}

export default connect()(App);