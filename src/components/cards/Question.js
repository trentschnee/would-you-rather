import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  GridList,
  Avatar,
  Paper,
  ButtonBase,
  Button,
  Typography,
  Radio,
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
  render() {
    const { classes, question, author, mauthedUserDetails } = this.props;
    console.log(author);
    const { avatarURL, name } = author;
    return (
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={avatarURL} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {name} Asks..
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Would You Rather:
                  </Typography>
                  <FormControl component="fieldset" className="formControl">
                    <RadioGroup aria-label="wyr" name="wyr">
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
                  </FormControl>
                </Grid>
                <Grid item>
                  <Button variant="contained">Submit</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
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
    question,
    author,
    authedUserDetails
  };
}
export default connect(mapStateToProps)(withStyles(useStyles)(Question));
