import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  ButtonBase,
  Typography,
  LinearProgress
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
class Results extends Component {
  render() {
    const { classes, question, author, mauthedUserDetails, id } = this.props;
    console.log(question);
    const { avatarURL, name } = author;
    const { optionOne, optionTwo } = question;
    const vote1 = optionOne.votes.length;
    const vote2 = optionTwo.votes.length;
    const totalVotes = vote1 + vote2;
    const vote1Ratio = (vote1 / totalVotes) * 100;
    const vote2Ratio = (vote2 / totalVotes) * 100;
    console.log(question);
    console.log(vote1Ratio, "<-DEBUG");
    if (question === null) {
      return <div>This question doesn't exist.</div>;
    } else {
      return (
        <Grid item key={id} xs={7} sm={7} md={7}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={avatarURL} />
                </ButtonBase>
              </Grid>
              <Grid item xs={4} sm container>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {name} Asks..
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Would You Rather:
                  </Typography>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                      {question.optionOne.text} ({vote1Ratio}%)
                    </Typography>
                    <LinearProgress variant="determinate" value={vote1Ratio} />
                    <Typography variant="body2" gutterBottom>
                      {question.optionTwo.text} ({vote2Ratio}%)
                    </Typography>
                    <LinearProgress variant="determinate" value={vote2Ratio} />
                  </Grid>
                </Grid>
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

  const question = questions[id];
  const author = question ? users[question.author] : "";
  const authedUserDetails = users[authedUser];

  return {
    question: question ? question : null,
    author,
    authedUserDetails
  };
}
export default connect(mapStateToProps)(withStyles(useStyles)(Results));
