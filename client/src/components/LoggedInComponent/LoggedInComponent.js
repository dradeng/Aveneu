import React from 'react';

import { connect } from 'react-redux';
import LoggedInNavBar from '../Navbar/LoggedInNavBar';

//standardized loggedincomponent
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        height: 100 + '%',
        width: 100 + '%',
    },
    statusContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        width: 100 + '%',
    },
    mainContainer: {
        flex: 9,
        display: 'flex',
        flexDirection: 'row',
        width: 100 + '%',
    },
    pageContainer: {
        flex: 1,
        position: 'relative',
        flexGrow: 1, // ensures that the container will take up the full height
        overflowY: 'auto',
    },
    notifications: {
        position: 'absolute',
        top: 30,
        right: 30,
        zIndex: 100,
        width: 980,
        maxWidth: 'calc(100% - 100px)',
    },
    notificationsBottom: {
        position: 'fixed',
        bottom: 0,
        right: 40,
        zIndex: 100,
    },
    left: {
        flexShrink: 0,
    },
    loadingBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 15 + '%',
        paddingLeft: 45 + '%',
    },
};


function LoggedInComponent(WrappedComponent) {
    function wrapper(props) {

        return (

                <div style={styles.container}>
                    <div style={styles.left}>
                        <LoggedInNavBar style={styles.statusContainer}/>
                    </div>
                    <div style={styles.mainContainer}>
                        <div style={styles.pageContainer}>
                          <WrappedComponent />
                        </div>
                    </div>
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
