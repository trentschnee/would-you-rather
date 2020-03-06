// Going to be getting the id

import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  FormControl,
  FormHelperText,
  ListItemText,
  Divider,
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  Grid,
  TextField,
  Button,
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon,
  Select,
  MenuItem
} from "@material-ui/core";
import { handleLogin } from "../actions/AuthedUser";
import { Redirect } from "react-router-dom";
const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2)
  },
  formControl: {
    margin: 0,
    fullWidth: true,
    display: "flex",
    wrap: "nowrap"
  },
  wrapIcon: {
    display: "inline-flex",
    alignItems: "center"
  },
  inline: {
    display: "inline"
  }
});
class LoginForm extends Component {
  state = {
    selectedValue: 1,
    isAuthed: false
  };
  // handle change method will take in an event.
  handleChange = e => {
    const selectedValue = e.target.value;
    this.setState({ selectedValue: selectedValue });
    // takes in the target.value field from the event.
  };
  handleSubmit = e => {
    const { selectedValue } = this.state;
    const { dispatch, history } = this.props;
    dispatch(handleLogin(selectedValue));
    this.setState({ isAuthed: true });
    history.push("/");
  };

  render() {
    const { id, classes, users } = this.props;
    const { selectedValue, toHome } = this.state;
    console.log(users, "<-users");
    if (toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={5} sm={5} md={5}>
          <form onSubmit={this.handleSubmit}>
            {/**Redirect to homeview if submitted**/}
            <Paper p={2} className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Login
              </Typography>

              <div>
                <FormControl className={classes.formControl}>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={selectedValue}
                    onChange={this.handleChange}
                  >
                    <MenuItem value={1}>
                      <em>None</em>
                    </MenuItem>
                    {Object.keys(users).map(item => (
                      <MenuItem key={item} value={users[item].id}>
                        <Typography
                          variant="inherit"
                          className={classes.wrapIcon}
                        >
                          <ListItemAvatar>
                            <Avatar
                              alt={users[item].name}
                              src={users[item].avatarURL}
                            />
                          </ListItemAvatar>

                          {users[item].name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    Please select the user you want to login as.
                  </FormHelperText>

                  <Button variant="outlined" type="submit">
                    Login
                  </Button>
                </FormControl>
              </div>
            </Paper>
          </form>
        </Grid>
      </Grid>
    );
  }
}
function mapStateToProps({ users }, props) {
  return {
    users
  };
}
export default connect(mapStateToProps)(withStyles(useStyles)(LoginForm));
