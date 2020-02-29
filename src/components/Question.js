// Going to be getting the id

import React, {Component} from 'react';
import {connect} from 'react-redux'
import QuestionCard from "./cards/Question"
import { Grid } from "@material-ui/core";
class Question extends Component {
render(){
    const {id} = this.props;
    console.log(this.props,"<-Test")
    return( <Grid container spacing={3} >
        <QuestionCard id={id} />
    </Grid>)
}

}
function mapStateToProps({authedUser,questions,users},props){
    const {id} = props.match.params
return{
    id,
}
}
export default connect(mapStateToProps)(Question)