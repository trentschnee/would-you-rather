// Going to be getting the id

import React, {Component} from 'react';
import {connect} from 'react-redux'
import ResultsCard from "./cards/Results"
import { Grid } from "@material-ui/core";
class Results extends Component {
render(){
    const {id} = this.props;
    console.log(this.props,"<-Test")
    return( <Grid container spacing={3} >
        <ResultsCard id={id} />
    </Grid>)
}

}
function mapStateToProps({authedUser,Resultss,users},props){
    const {id} = props.match.params
return{
    id,
}
}
export default connect(mapStateToProps)(Results)