import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/Shared";
import { connect } from "react-redux";
import Home from "./Home";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
import QuestionPage from "./QuestionPage"
import NewQuestion from "./NewQuestion"
const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
});


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <ThemeProvider theme={theme}>
          {this.props.loading === true ? (
            "LOADING"
          ) : (
            <Fragment>
              <Navbar />
              <CssBaseline />
  
              <div className={classes.root}>
              <Container className={classes.cardGrid} maxWidth="md">
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/question/:id" component={QuestionPage}/>
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route path="/newQuestion" component={NewQuestion} />
                  </Container>
            
         </div>
               
            </Fragment>
          )}
        </ThemeProvider>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  //if the authed user is null, make the looking to true.
  return { loading: authedUser === null };
}
export default connect(mapStateToProps)(withStyles(useStyles)(App));
