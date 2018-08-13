import types from './types';


function appStatus(
    state = {
        failedLoginAttempt: false,
        signUpFailed: false,
        signUpFailedReason: '',
        signUpSuccess: false,
        passwordLink: false,
        passwordReset: false,
        emailExists: false,
        day: new Date(),
    },
    action,
) {
    switch (action.type) {
        case types.SIGNUP_FAILED:
            state = Object.assign({}, state);
            state.signUpFailed = true;
            state.signUpFailedReason = action.reason;
            return state;
        case types.SIGNUP_SUCCESS:
            state = Object.assign({}, state);
            state.signUpSuccess = true;
            return state;
        case types.LOGIN_FAILED:
            state = Object.assign({}, state);
            state.failedLoginAttempt = true;
            return state;
        case types.FIRST_LOGIN:
            state = Object.assign({}, state);
            state.firstLogin = true;
            return state;
        default:
            return state;
    }
}

export default appStatus;
