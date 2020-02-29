import { RECEIVE_QUESTION,ADD_QUESTION } from "../actions/Questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        ...state,
        ...action.question
      };
    case ADD_QUESTION:
      const {question} = action;
     
      return{
        ...state,
        [question.id]:question

      };
    default:
      return state;
  }
}
