import React from "react";
import { handleInitialData } from "../actions/Shared";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
//maybe make into helpers

import Question from "./Question";
class Dashboard extends React.Component {
  state = {
    showAnswered: false
  };
  render() {
    const { answeredQuestionIds, unansweredQuestionIds } = this.props;
    return (
      <Grid container spacing={3}>
        {this.state.showAnswered === true
          ? answeredQuestionIds.map(id => <Question key={id} id={id} />)
          : unansweredQuestionIds.map(id => <Question key={id} id={id} />)}
      </Grid>
    );
  }
}

// Take the state of our store for questions
// TODO: Reword
function mapStateToProps({ questions, authedUser, users }) {
  const answeredQuestionIds = Object.keys(users[authedUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unansweredQuestionIds = Object.keys(questions)
    .filter(q => !answeredQuestionIds.includes(q))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredQuestionIds,
    unansweredQuestionIds
  };
}

export default connect(mapStateToProps)(Dashboard);
