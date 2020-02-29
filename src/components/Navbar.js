import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
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
  render() {
    const { classes } = this.props;
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
          <nav>
            <NavLink exact to="/" className={classes.link}>
            
            Home
            </NavLink>
            <NavLink exact to="/leaderboard" className={classes.link}>
            
            Leaderboard
            </NavLink>
            <NavLink exact to="/newquestion" className={classes.link}>
            
            New Question
            </NavLink>
          </nav>
          <Button href="#" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default connect()(withStyles(useStyles)(Navbar));
