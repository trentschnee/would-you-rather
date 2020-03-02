import React, { Component } from "react";
import {handleAddAnswerToQuestion} from "../../actions/Questions"
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import {CardHeader,Grid,Button,Typography, IconButton,CardMedia,CardContent, Card} from '@material-ui/core';
const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});
class Questionhome extends Component {

  render() {
    
    const { classes, question, author, mauthedUserDetails,id } = this.props;
    const {optionOne,optionTwo}= question;
    console.log(classes);
    const { avatarURL, name } = author;
    const header = `${name} asks`;
    var displayQuestion = optionOne.text.split(' ').slice(0,3).join(' ') + ' or ' + optionTwo.text.slice(0,2)
    if (question === null){
      return(<div>This question doesn't exist.</div>)
    
    }
    else{
      return (
      
           <Grid item key={id} xs={7} sm={7} md={7}>
           
           <Card className={classes.root}>

           <CardMedia
        className={classes.cover}
        image={avatarURL}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography >
            {name} Asks:
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Would you rather ..{displayQuestion}..
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <Link to={`/question/${id}`}>
                  <Button variant="contained">View Poll</Button>
                  </Link>
         
        
        </div>
      </div>
     
    </Card>
     
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
export default connect(mapStateToProps)(withStyles(useStyles)(Questionhome));
