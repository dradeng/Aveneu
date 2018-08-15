import React from 'react';

import { connect } from 'react-redux';


//standardized loggedincomponent

function LoggedInComponent(WrappedComponent) {
    function wrapper(props) {

        return (
            <div >
                <WrappedComponent />
            </div>
        );
    }
    const mapStateToProps = state => {
        return {
        };
    };

    return connect()(wrapper);
}
const mapStateToProps = state => {
    return {
        firstLogin: state.appStatus.firstLogin,
        signUpSuccess: state.appStatus.signUpSuccess,
        passwordLink: state.appStatus.passwordLink,
    };
};
export default LoggedInComponent;
