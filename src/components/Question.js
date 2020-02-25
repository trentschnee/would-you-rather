import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import {
  Grid,
  Avatar,
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
class Question extends Component {
  render() {
    const { question, author, mauthedUserDetails } = this.props;

    return (
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className="avatar">
                R
              </Avatar>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia className="media" image={null} title="Paella dish" />
          <CardContent>
            <Typography variant="headline" component="h2">
              Would You Rather..
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText>
                  <Typography variant="headline" component="h3">
                    {question.optionOne.text}
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography variant="headline" component="h2">
                    OR
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography variant="headline" component="h3">
                    {question.optionTwo.text}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}
// If you pass a companent that you are rendering, the prop will be the second argument.
// TODO: Reword
function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : "";
  const authedUserDetails = users[authedUser];
  return {
    question,
    author,
    authedUserDetails
  };
}
export default connect(mapStateToProps)(Question);
