import {saveQuestion,saveQuestionAnswer } from "../utils/API";
import {addQuestionToUser,addAnswerToUser } from "../actions/Users"
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION"
// Takes in questions object
function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question

    }
}

export function handleAddQuestion( optionOneText,
    optionTwoText,
    author){
        return dispatch => {
            return saveQuestion({
              optionOneText,
              optionTwoText,
              author
            }).then(question => {
            dispatch(addQuestion(question))
              dispatch(addQuestionToUser(question));
            });
          };

}
function addAnswerToQuestion(authedUser,id,answer){
    return{
        type: ADD_ANSWER_TO_QUESTION,
        authedUser,
        id,
        answer
        

    }
}
export function handleAddAnswerToQuestion( authedUser,qid,answer){
        return dispatch => {
            return saveQuestionAnswer({
                authedUser,
                qid,
                answer
            }).then(question => {
            dispatch(addAnswerToQuestion(authedUser,qid,answer))
            dispatch(addAnswerToUser(authedUser, qid, answer));
             ;
            });
          };

}

export function receiveQuestion(question){
    return{
        type: RECEIVE_QUESTION,
    question,
    }
}