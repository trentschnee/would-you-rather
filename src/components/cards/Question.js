import React, { Component } from "react";
import {handleAddAnswerToQuestion} from "../../actions/Questions"
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import MaterialUIForm from 'react-material-ui-form'
import { withStyles } from "@material-ui/core/styles";
import {JssProvider} from 'react-jss'

import {
  Grid,
  Paper,
  Card,
  CardMedia,
  CardContent,CardActions,
  ButtonBase,
  Button,
  Typography,
  Radio,
  TextField,
  Checkbox,
  FormGroup,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel
} from "@material-ui/core";
const useStyles = theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 80,
    height: 80
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "50%"
  }
});
class Question extends Component {
  state = {
    selected: "" 
  }
  handleChange = ev => {
    this.setState({ selected: ev.target.value });
    console.log(this.state)
  };
  submit = e =>{
    const {selected} = this.state;
    const {authedUserDetails,question,dispatch,id} = this.props;
    dispatch(handleAddAnswerToQuestion(authedUserDetails.id,question.id,selected))
    
    

  }

  render() {
    const { selected } = this.state;
    const { classes, question, author, mauthedUserDetails,id } = this.props;
    console.log(classes);
    const { avatarURL, name } = author;
    if (question === null){
      return(<div>This question doesn't exist.</div>)
    
    }
    else{
      return (
      
           <Grid item key={id} xs={12} sm={12} md={12}>
           
               <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={avatarURL} />
              </ButtonBase>
            </Grid>
            <Grid item xs={4} sm container>
            <JssProvider>
              <MaterialUIForm onSubmit={this.submit}>

          
          <FormControl component="fieldset" name="method-of-payment" onSubmit={this.submit}>
           
            <RadioGroup aria-label="Answers" name="answers" onChange={this.handleChange} value={selected} >
              <FormControlLabel value="optionOne" control={<Radio color="default"  />}  label={question.optionOne.text} />
              <FormControlLabel value="optionTwo" control={<Radio color="default"  />}  label={question.optionTwo.text} /> 
            </RadioGroup>
          
          </FormControl>
          <Button type="submit">Submit</Button>
        
        </MaterialUIForm>
        </JssProvider>
              </Grid>
          </Grid>
        </Paper>
              </Grid>
        
       
      );
    }
    
  }
}
// If you pass a component that you are rendering, the prop will be the second argument.
// TODO: Reword
function mapStateToProps({ authedUser, users, questions }, { id }) {
  // Get the current question
  const question = questions[id]
  const author = question ? users[question.author] : "";
  const authedUserDetails = users[authedUser];
  return {
    question : question? question : null,
    author,
    authedUserDetails
  };
}
export default connect(mapStateToProps)(withStyles(useStyles)(Question));
