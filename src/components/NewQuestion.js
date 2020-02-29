// Going to be getting the id

import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withStyles } from "@material-ui/core/styles";
import { Paper,Typography,Grid,TextField,Button,Checkbox } from "@material-ui/core";
const useStyles = theme =>(
  {
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
  }
);
class NewQuestion extends Component {
render(){
    const {id,classes} = this.props;
    console.log(this.props,"<-Test")
    return( <Paper p={2} className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Create New Question
        </Typography>
        <Typography variant="h6" gutterBottom>
        Would you rather ...
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField required id="questOne" label="Enter Question One Text Here" fullWidth />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="questTwo" label="Enter Question Two Text Here" fullWidth />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
       
      </Paper>)
}

}
function mapStateToProps({authedUser,questions,users},props){
    const {id} = props.match.params
return{
    id,
}
}
export default connect(mapStateToProps)(withStyles(useStyles)(NewQuestion));
