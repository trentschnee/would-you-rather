// Going to be getting the id

import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, TextField, Button } from "@material-ui/core";
import { handleAddQuestion } from "../actions/Questions";
import { Redirect } from "react-router-dom";
const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
});
class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false
  };
  // handle change method will take in an event.
  handleChange = e => {
    // takes in the target.value field from the event.
    const cQuestionId = e.target.id;
    const cQuestionValue = e.target.value;

    return cQuestionId === "optionOne"
      ? this.setState({ optionOne: cQuestionValue })
      : this.setState({ optionTwo: cQuestionValue });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { authedUser, dispatch } = this.props;
    dispatch(handleAddQuestion(optionOne, optionTwo, authedUser));
    this.setState({ optionOne: "", optionTwo: "", toHome: true });
  };
  render() {
    const { id, classes } = this.props;
    const { optionOne, optionTwo, toHome } = this.state;
    if (toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        {/**Redirect to homeview if submitted**/}
        <Paper p={2} className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Create New Question
          </Typography>
          <Typography variant="h6" gutterBottom>
            Would You Rather ...
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="optionOne"
                label="Enter Question One Text Here"
                fullWidth
                onChange={this.handleChange}
                value={optionOne}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="questTwo"
                label="Enter Question Two Text Here"
                fullWidth
                onChange={this.handleChange}
                value={optionTwo}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    );
  }
}
function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  console.log(authedUser, "mapState");
  return {
    id,
    authedUser
  };
}
export default connect(mapStateToProps)(withStyles(useStyles)(NewQuestion));
