import React from "react";
import { handleInitialData } from "../actions/Shared";
import { connect } from "react-redux";
//maybe make into helpers

import Question from "./Question";
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <ul className="dashboard-list">
          {this.props.questionIds.map(id => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Take the state of our store for questions
// TODO: Reword
function mapStateToProps({ questions }) {
  // Return an object that has a tweetsIds property on it and sort it by timestamps
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
