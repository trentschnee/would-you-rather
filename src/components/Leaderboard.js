import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import LeaderboardCard from "./cards/Leaderboard";
const Leaderboard = props => (
  <Grid container spacing={3}>
    {props.leaderBoard.map((obj, key) => (
      <LeaderboardCard key={key} userObj={obj} />
    ))}
  </Grid>
);

function mapStateToProps({ users, authedUser }) {
  // map through each users and send user mapped
  return {
    leaderBoard: Object.keys(users)
      .map(user => {
        // select the user obj
        var userSel = users[user];
        var questionsAns = Object.keys(userSel.answers).length;
        var questionsAsked = Object.keys(userSel.questions).length;
        var totalScore = questionsAns + questionsAsked;
        return { ...userSel, questionsAns, questionsAsked, totalScore };
      })
      .sort()
      // TODO make the leadboard sort from higest to lowest
      .reverse()
  };
}
export default connect(mapStateToProps)(Leaderboard);
