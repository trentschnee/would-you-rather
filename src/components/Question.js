import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
class Question extends Component {
  render() {
    const { question } = this.props;
    console.log(this.props);
    return (
      <a className="question">
        <div className="question-info"></div>
        {/* <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
<div className="tweet-info">
<div>
  <span>{name}</span>
  <div>{formatDate(timestamp)}</div>
  {parent && (
    <button
      className="replying-to"
      onclick={e => this.toParent(e, parent.id)}
    >
      Replying to @{parent.author}
    </button>
  )}
  <p>{text}</p>
</div>
<div className="tweet-icons">
  <TiArrowBackOutline className="tweet-icon" />
  <span>{replies !== 0 && replies}</span>
  <button className="heart-button" onClick={this.handleLike}>
    {hasLiked === true ? (
      <TiHeartFullOutline
        color="#e0245"
        className="tweet-icon"
      />
    ) : (
      <TiHeartOutline className="tweet-icon" />
    )}
  </button>
  <span>{likes !== 0 && likes}</span>
</div>
</div> */}
      </a>
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
