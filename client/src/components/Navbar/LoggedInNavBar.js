import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import MenuDropdown from './MenuDropdown';

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
        background: 'linear-gradient(to right bottom, #00EFC1, #4BDBE6)',
        boxShadow: 'rgba(0,0,0,0.15) 0px 4px 16px',
        zIndex: 101,
    },
    search: {
        borderRadius: 20,
        backgroundColor: '#ffffff',
        position: 'right',
        boxShadow: 'none',
        outline: 'none',
        border: 'none',
        width: '30%',
        right: 0,
        margin: 5,
        padding: '10px 18px 9px',
       // boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    },
    logo: {
        marginLeft: 10,
    },
    navItems: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',

    },
    navItem: {
        marginRight: 20,

    },
    rightNav: {
        marginRight: 20,

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
        this.toggleDropdown =this.toggleDropdown.bind(this);
        this.state= {
            showDropdown: false,
        };
    }
    toggleDropdown() {

        this.setState({showDropdown: !this.state.showDropdown});
    }

    render() {
        console.log(this.props);
        return (
            <div style={styles.container} className="nav navbar-nav">

                <div style={styles.navItems}>
                    <h1 style={styles.logo}>
                        aveneu
                    </h1>
                    <input  placeholder='search' style={styles.search}/>

                    <div

                    >
						<img onClick={() => this.toggleDropdown('UserDropdown')} src="https://i.ytimg.com/vi/9-dIdFXeFhs/maxresdefault.jpg" style={{borderRadius: '50%', width: 45,height: 45, margin: 5,marginRight: 10, border: '3px solid #fff'}}/>
                        {this.state.showDropdown ? <MenuDropdown /> : null}
                    </div>
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => ({ ...state.appStatus });


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
