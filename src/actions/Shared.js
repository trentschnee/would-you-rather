import { setAuthedUser } from "../actions/AuthedUser";
import { getInitialData } from "../utils/API";
import { receiveQuestions } from "./Questions";
import { receiveUsers } from "./Users";
const AUTH_ID = "tylermcginnis";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTH_ID));
    });
  };
}
