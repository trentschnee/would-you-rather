import React from "react";
import { handleInitialData } from "../actions/Shared";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";

// TODO:reword
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="container">
        <Dashboard />
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {};
}

export default connect(mapStateToProps)(App);
