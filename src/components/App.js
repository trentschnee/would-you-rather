import React from "react";
import { handleInitialData } from "../actions/Shared";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import Container from "@material-ui/core/Container";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Container>
        {this.props.loading === true ? "LOADING" : <Dashboard />}
      </Container>
    );
  }
}

function mapStateToProps({ authedUser }) {
  //if the authed user is null, make the looking to true.
  return { loading: authedUser === null };
}
export default connect(mapStateToProps)(App);
