
import { getInitialData } from "../utils/API";
import { receiveQuestion } from "./Questions";
import { receiveUsers } from "./Users";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestion(questions));
      dispatch(receiveUsers(users));
    });
  };
}
