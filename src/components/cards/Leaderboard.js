import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import { formatLeaderboard } from "../../utils/helpers";
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

const Leaderboard = props => {
  const { userObj, classes } = props;
  const {
    questionsAnswered,
    questionsAsked,
    totalScore,
    avatarURL,
    name
  } = userObj;
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Paper className={classes.paper}>
        <Grid container alignItems="center" justify="space-between" spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={avatarURL} />
            </ButtonBase>
            <Typography>{name}</Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom>
              Questions Asked: {questionsAsked}
            </Typography>
            <Typography gutterBottom>
              Questions Answered: {questionsAnswered}
            </Typography>
          </Grid>

          <Grid item>
            <Avatar>{totalScore}</Avatar>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default connect()(withStyles(useStyles)(Leaderboard));
