import React, { Component } from "react";
import { handleAddAnswerToQuestion } from "../../actions/Questions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

import {
  Grid,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  ButtonBase,
  Button,
  Typography,
  Radio,
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
    selected: "",
    toResults: ""
  };
  handleChange = ev => {
    this.setState({ selected: ev.target.value });
    console.log(this.state);
  };
  submit = e => {
    e.preventDefault();
    const { selected } = this.state;
    const { authedUserDetails, question, dispatch, id } = this.props;
    dispatch(
      handleAddAnswerToQuestion(authedUserDetails.id, question.id, selected)
    );
    this.setState({ optionOne: "", optionTwo: "", toResults: true });
  };

  render() {
    const { selected, toResults } = this.state;

    const { classes, question, author, mauthedUserDetails, id } = this.props;
    if (toResults === true) {
      return <Redirect to={`/results/${id}`} />;
    }
    console.log(classes);
    const { avatarURL, name } = author;
    if (question === null) {
      return <div>This question doesn't exist.</div>;
    } else {
      return (
        <Grid item key={id} xs={12} sm={12} md={12}>
          <form onSubmit={this.submit}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={avatarURL}
                    />
                  </ButtonBase>
                </Grid>

                <Grid item xs={4} sm container>
                  <Grid item xs>
                    <Typography variant="h6" gutterBottom>
                      {name} Asks:
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      color="textSecondary"
                    >
                      Would You Rather:
                    </Typography>

                    <RadioGroup
                      aria-label="Answers"
                      name="answers"
                      onChange={this.handleChange}
                      value={selected}
                    >
                      <FormControlLabel
                        value="optionOne"
                        control={<Radio color="default" />}
                        label={question.optionOne.text}
                      />
                      <FormControlLabel
                        value="optionTwo"
                        control={<Radio color="default" />}
                        label={question.optionTwo.text}
                      />
                    </RadioGroup>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </form>
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
export default connect(mapStateToProps)(withStyles(useStyles)(Question));
