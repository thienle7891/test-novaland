
import * as types from "./actionTypes";

export const loadUsersStart = () => ({
    type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
    type: types.LOAD_USERS_SUCCESS,
    payload: users,
});
export const loadUsersError = (error) => ({
    type: types.LOAD_USERS_ERROR,
    payload: error,
});

//  CREATE ACTION
export const createUserStart = (user) => ({
    type: types.CREATE_USER_START,
    payload: user,
});

export const createUserSuccess = () => ({
    type: types.CREATE_USER_SUCCESS,
});
export const createUserError = (error) => ({
    type: types.CREATE_USER_ERROR,
    payload: error,
});

// DELETE
export const deleteUserStart = (userId) => ({
    type: types.DELETE_USER_START,
    payload: userId,
});

export const deleteUserSuccess = (userId) => ({
    type: types.DELETE_USER_SUCCESS,
    payload: userId
});
export const deleteUserError = (error) => ({
    type: types.DELETE_USER_ERROR,
    payload: error,
});

// ----Edit----

export const editUserStart = (id, formValue) => ({
    type: types.EDIT_USER_START,
    payload: {id, formValue}
});

export const editUserSuccess = () => ({
    type: types.EDIT_USER_SUCCESS,
});
export const editUserError = (error) => ({
    type: types.EDIT_USER_ERROR,
    payload: error,
});

// ----Login--------------------

export const loginStart = (loggingId) => ({
    type: types.LOGIN_START,
    payload: loggingId
});

export const loginSuccess = (loggingId) => ({
    type: types.LOGIN_SUCCESS,
    payload: loggingId
});
export const loginError = (error) => ({
    type: types.LOGIN_ERROR,
    payload: error,
});
