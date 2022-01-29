import * as types from "./actionTypes"

const initialState= {
    users: [],
    loading: false, 
    error: null,
    loggingId: null,
};

const usersReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.LOAD_USERS_START:
        case types.CREATE_USER_START:
        case types.DELETE_USER_START:
        case types.EDIT_USER_START:
            return {
                ...state,
                loading: true,
            }
        case types.LOGIN_START:
            return {
                ...state,
                loading: true,
                loggingId: action.payload,
            }
        case types.LOAD_USERS_SUCCESS:
        case types.EDIT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case types.CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter((user) => user.id !== action.payload)
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggingId: action.payload,
            }
            
        case types.LOAD_USERS_ERROR:
        case types.CREATE_USER_ERROR:
        case types.DELETE_USER_ERROR:
        case types.EDIT_USER_ERROR:
        case types.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default: 
            return state;
    }
}

export default usersReducer;