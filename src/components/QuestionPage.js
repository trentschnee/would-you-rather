// Going to be getting the id

import React, {Component} from 'react';
import {connect} from 'react-redux'
import QuestionCard from "./cards/Question"
class QuestionPage extends Component {
render(){
    const {id} = this.props;
    console.log(this.props)
    return(<div>
        <QuestionCard id={id} />
    </div>)
}

}
function mapStateToProps({authedUser,questions,users},props){
    const {id} = props.match.params
return{
    id,
}
}
export default connect(mapStateToProps)(QuestionPage)