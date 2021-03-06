import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';

/*
@TODO IMPELMENT to track props

const propTypes = {
    applicationName: PropTypes.string.isRequired,
    applicationIcon: PropTypes.string.isRequired,
    buildingName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};
 */
const logo = require('../../assets/logo.png');
const styles = {
    container: {
        width: '100%',
        flex: '1 1 1',
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'myriad-arabic',
        justifyContent: 'flex-start',
        alignItems: 'center',
        boxSizing: 'border-box',
        minHeight: 60,
        borderBottom: '1px solid rgb(248, 248, 248,.4)',
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(0, 0, 0,.1)',
        boxShadow: 'rgba(0,0,0,0.15) 0px 4px 16px',
        zIndex: 101,
    },
    logo: {
        marginLeft: 10,
        marginRight: '35%',
    },
    navItems: {
        flexDirection: 'row',
        display: 'flex',
        paddingTop: 10,
        justifyContent: 'space-between',

    },
    navItem: {
        marginRight: 20,
        padding: 5,
        paddingTop: 10,

    },
    rightNav: {
        position: 'absolute',
        right: 0,
        top: 0,
        borderLeft: '1px solid #fff',
        flexDirection: 'row',
        display: 'flex',
        minHeight: 60,
        padding: 5,
        paddingTop: 10,


    }
};
const mapDispatchToProps = dispatch => ({
    onShowSignUp: () =>
        dispatch({ type: 'SHOW_SIGNUP_MODAL'}),
    onShowSignIn: () =>
        dispatch({ type: 'SHOW_SIGNIN_MODAL'}),

});

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.showSignUp  = () => this.props.onShowSignUp();
        this.showSignIn = () => this.props.onShowSignIn();
    }

    render() {
        console.log(this.props);
        return (
            <div style={styles.container} className="nav navbar-nav">
                <h1 style={styles.logo}>
                    <div>
                    aveneu
                    </div>
                </h1>
                <div style={styles.navItems}>
                    <div style={styles.navItem}>
                        <p>
                        Lease
                        </p>
                    </div>
                    <div style={styles.navItem}>
                        <p>
                        Sublet
                        </p>
                    </div>
                    <div style={styles.rightNav}>
                    <div onClick={this.showSignUp} style={styles.navItem}>
                            Sign Up
                    </div>
                    <div onClick={this.showSignIn} style={styles.navItem}>
                        Sign In
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => ({ ...state.appStatus });


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
