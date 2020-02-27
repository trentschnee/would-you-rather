import React from "react";
import { handleInitialData } from "../actions/Shared";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
//maybe make into helpers

import QuestionCard from "./cards/Question";
class Home extends React.Component {
  state = {
    showAnswered: false
  };
  render() {
    const { answeredIds, unansweredIds } = this.props;
    return (
      <Grid container spacing={3}>
        {this.state.showAnswered === true
          ? answeredIds.map(id => <QuestionCard key={id} id={id} />)
          : unansweredIds.map(id => <QuestionCard key={id} id={id} />)}
      </Grid>
    );
  }
}

// Take the state of our store for questions
// TODO: Reword
function mapStateToProps({ questions, authedUser, users }) {
  // Get the list of answeredIds
  const answeredIds = Object.keys(users[authedUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unansweredIds = Object.keys(questions)
    .filter(q => !answeredIds.includes(q))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredIds,
    unansweredIds
  };
}

export default connect(mapStateToProps)(Home);
