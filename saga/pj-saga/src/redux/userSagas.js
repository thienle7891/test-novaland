import * as types from "./actionTypes"

import { take, takeEvery, takeLatest, 
    put, all, delay, fork, call 
} from "redux-saga/effects";

import { loadUsersSuccess, 
    loadUsersError, 
    createUserSuccess, 
    createUserError, 
    deleteUserSuccess,
    deleteUserError,
    editUserSuccess,
    editUserError,
} from "./actions";
import { loadUserApi, createUserApi, deleteUserApi, editUserApi } from "./api";


// -------Load------
function* onLoadUsersStartAsync () {
    try {
        const response = yield call(loadUserApi);
        if(response.status === 200) {
            yield delay(500);
            yield put(loadUsersSuccess(response.data))
        }
    } catch (error) {
        yield put(loadUsersError(error.response.data))
    }
}

function* onLoadUsers () {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}


// ----- Create----
function* onCreateUserStartAsync ({payload}) {
    try {
        const response = yield call(createUserApi, payload );
        if(response.status === 200) {
            yield put(createUserSuccess(response.data))
        }
    } catch (error) {
        yield put(createUserError(error.response.data))
    }
}

function* onCreateUser () {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync)
}


// ---- Delete-----
function* onDeleteUserStartAsync (userId) {
    try {
        const response = yield call(deleteUserApi, userId );
        if(response.status === 200) {
            yield delay(500)
            yield put(deleteUserSuccess(userId))
        }
    } catch (error) {
        yield put(deleteUserError(error.response.data))
    }
}

export function* onDeleteUser () {
    while (true) {
        const { payload: userId } = yield take(types.DELETE_USER_START)

        yield call(onDeleteUserStartAsync, userId)
    }
}

// ----edit

function* onEditUserStartAsync ({payload: {id, formValue}}) {
    try {
        const response = yield call(editUserApi, id, formValue );
        if(response.status === 200) {
            yield put(editUserSuccess())
        }
    } catch (error) {
        yield put(editUserError(error.response.data))
    }
}


function* onEditUser () {
    yield takeLatest(types.EDIT_USER_START, onEditUserStartAsync)
}

const userSagas = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser), fork(onEditUser)];

export default function* rootSaga () {
    yield all([...userSagas]);
}