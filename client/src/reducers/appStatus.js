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
        showSignUp: false,
        showSignIn: false,

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
        case types.SHOW_SIGNUP_MODAL:
            return Object.assign({}, state, {
                showSignUp: true,
            });
        case types.SHOW_SIGNIN_MODAL:
            return Object.assign({}, state, {
                showSignIn: true,
            });
        case types.CLOSE_SIGNIN_MODAL:
            return Object.assign({}, state, {
                showSignIn: false,
            });
        case types.CLOSE_SIGNUP_MODAL:
            state = Object.assign({}, state);
            state.showSignUp = false;
            return state;
        default:
            return state;
    }
}

export default appStatus;
