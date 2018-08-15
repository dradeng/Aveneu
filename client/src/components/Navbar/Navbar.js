import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

/*
@TODO IMPELMENT to track props

const propTypes = {
    applicationName: PropTypes.string.isRequired,
    applicationIcon: PropTypes.string.isRequired,
    buildingName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};
 */
const styles = {
    container: {
        width: '100%',
        flex: '1 1 1',
        display: 'flex',
        flexDirection: 'row',
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

        justifyContent: 'space-between',

    },
    navItem: {
        marginRight: 20,

    }
};
const mapDispatchToProps = dispatch => ({
    onShowSignUp: () =>
        dispatch({ type: 'SHOW_SIGNUP_MODAL'}),

});

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.showSignUp  = () => this.props.onShowSignUp();

    }

    render() {
        console.log(this.props);
        return (
            <div style={styles.container} className="nav navbar-nav">
                <h1 style={styles.logo}>
                    aveneu
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
                    <div style={styles.navItem}>
                        <button  onClick={this.showSignUp}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => ({ ...state.appStatus });


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
