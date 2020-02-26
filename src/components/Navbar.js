import React from "react";
import {connect} from "react-redux"
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
  } from "@material-ui/core";
class Navbar extends React.Component{
render(){
    return(<AppBar position="static">
    <Toolbar>
      <Button color="inherit">Home</Button>
      <Button color="inherit">Leaderboard</Button>
      <Button color="inherit">new Question</Button>
    </Toolbar>
  </AppBar>)
}

}

export default connect()(Navbar)