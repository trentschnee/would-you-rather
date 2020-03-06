import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import {
  Grid,
  Button,
  Typography,
  CardMedia,
  CardContent,
  Card
} from "@material-ui/core";
const useStyles = theme => ({
  root: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  title: {
    fontSize: 14
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
});
class Questionhome extends Component {
  render() {
    const { classes, question, author, id, results } = this.props;
    const { optionOne, optionTwo } = question;
    console.log(classes);
    const { avatarURL, name } = author;
    var displayQuestion =
      optionOne.text
        .split(" ")
        .slice(0, 3)
        .join(" ") +
      " or " +
      optionTwo.text.slice(0, 2);
    if (question === null) {
      return <div>This question doesn't exist.</div>;
    } else {
      return (
        <Grid item key={id} xs={7} sm={7} md={7}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={avatarURL}
              title={name}
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant="h6" gutterBottom>
                  {name} Asks:
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  Would you rather ..{displayQuestion}..
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                {results ? (
                  <Link to={`/results/${id}`}>
                    <Button variant="outlined">View Results</Button>{" "}
                  </Link>
                ) : (
                  <Link to={`/question/${id}`}>
                    <Button variant="outlined">View Poll</Button>{" "}
                  </Link>
                )}
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
  const question = questions[id];
  const author = question ? users[question.author] : "";
  const authedUserDetails = users[authedUser];
  return {
    question: question ? question : null,
    author,
    authedUserDetails
  };
}
export default connect(mapStateToProps)(withStyles(useStyles)(Questionhome));
