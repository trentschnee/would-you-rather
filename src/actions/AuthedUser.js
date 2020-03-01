// create the constant for consistency
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

 function setAuthedUser(id){
    return {
        type:SET_AUTHED_USER,
        id
    }

}
 function logOutAuthedUser(id){
    return {
        type:LOGOUT_AUTHED_USER,
        id
    }

}
export function handleLogout(id){
    return (dispatch) => {
        dispatch(logOutAuthedUser(id));
    }
}
export function handleLogin(id){
    return (dispatch) => {
        dispatch(setAuthedUser(id));
    }
}