import {RECEIVE_USERS,ADD_QUESTION_TO_USER,ADD_ANSWER_TO_USER} from "../actions/Users"

export default function users(state={},action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
            return {
                ...state,
                [action.author]: {
                  ...state[action.author],
                  questions: state[action.author].questions.concat(action.id)
                }
            }
            case ADD_ANSWER_TO_USER:
                const { authedUser, qid, answer } = action;
                
                return { 
                  ...state, 
                  [authedUser]: { 
                    ...state[authedUser], 
                    answers: {
                      ...state[authedUser].answers, 
                      [qid]: answer
                    }
                  }
          
                }
        default:
            return state;
    }
}