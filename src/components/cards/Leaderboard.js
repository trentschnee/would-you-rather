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
    width: 128,
    height: 128
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
  const { avatarURL, name } = userObj;
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                      label={null}
                    />
                    <FormControlLabel
                      value="optionTwo"
                      control={<Radio color="default" />}
                      label={null}
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
};
export default connect()(withStyles(useStyles)(Leaderboard));
