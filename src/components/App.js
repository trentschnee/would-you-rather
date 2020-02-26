import React from "react";
import { handleInitialData } from "../actions/Shared";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import Navbar from "./Navbar";
const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const useStyles = theme => ({
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
});

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          {this.props.loading === true ? (
            "LOADING"
          ) : (
            <div>
              <Navbar />
              <CssBaseline />
              <Container component="main" className={classes.container}>
                <Dashboard />
              </Container>
            </div>
          )}
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  //if the authed user is null, make the looking to true.
  return { loading: authedUser === null };
}
export default connect(mapStateToProps)(withStyles(useStyles)(App));
