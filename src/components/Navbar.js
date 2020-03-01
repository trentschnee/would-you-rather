import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import {handleLogout} from "../actions/AuthedUser"
const useStyles = theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
    
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: "#fff",
  }
});
class Navbar extends React.Component {
  handleClick = e =>{
    const { isAuthed,dispatch,userLogged } = this.props;
    console.log(userLogged,"testnav")
    return (isAuthed ? (dispatch(handleLogout(userLogged))): null)

  }
  render() {
    const { classes,isAuthed } = this.props;
    return (
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Would You Rather
          </Typography>
           
         
         
          {(isAuthed ?   <div> <NavLink exact to="/" className={classes.link}>
            
            Home
            </NavLink>
            <NavLink exact to="/leaderboard" className={classes.link}>
            
            Leaderboard
            </NavLink>
            <NavLink exact to="/newquestion" className={classes.link}>
            
            New Question
            </NavLink>
            <NavLink exact to={(isAuthed ? "#" : "/login")} className={classes.link}><Button onClick={this.handleClick} variant="outlined" className={classes.link}>Logout </Button>  </NavLink></div>: null)}
         
         
        </Toolbar>
      </AppBar>
    );
  }
}
function mapStateToProps({ authedUser }) {
  //if the authed user is null, make the looking to true.
  const userLogged = authedUser!== null ? authedUser : null
  return { isAuthed: authedUser !== null,userLogged };
}
export default connect(mapStateToProps)(withStyles(useStyles)(Navbar));
