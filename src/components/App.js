import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/Shared";
import { connect } from "react-redux";
import Home from "./Home";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
import QuestionPage from "./Question";
import ResultsPage from "./Results";
import NewQuestion from "./NewQuestion";
import LoginForm from "./LoginForm";
const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
});

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { classes, isAuthed } = this.props;
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Fragment>
            <Navbar />
            <CssBaseline />

            <div className={classes.root}>
              <Container className={classes.cardGrid} maxWidth="md">
                {this.props.isAuthed === false ? (
                  <Route path="/" component={LoginForm} />
                ) : (
                  <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route
                      exact
                      path="/question/:id"
                      component={QuestionPage}
                    />
                    <Route exact path="/leaderboard" component={Leaderboard} />
                    <Route exact path="/newquestion" component={NewQuestion} />
                    <Route exact path="/results/:id" component={ResultsPage} />
                  </Switch>
                )}
              </Container>
            </div>
          </Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  //if the authed user is null, make the looking to true.
  console.log(authedUser);
  return { isAuthed: authedUser !== null };
}
export default connect(mapStateToProps)(withStyles(useStyles)(App));
