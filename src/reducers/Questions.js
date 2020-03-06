import {
  RECEIVE_QUESTION,
  ADD_QUESTION,
  ADD_ANSWER_TO_QUESTION
} from "../actions/Questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        ...state,
        ...action.question
      };
    case ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question
      };
    case ADD_ANSWER_TO_QUESTION:
      const { authedUser, id, answer } = action;

      return {
        ...state,
        [id]: {
          ...state[id],
          [answer]: {
            ...state[id][answer],
            votes: state[id][answer].votes.concat(authedUser)
          }
        }
      };

    default:
      return state;
  }
}
